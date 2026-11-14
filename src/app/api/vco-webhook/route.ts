import { createHmac, timingSafeEqual } from "crypto";
import { revalidateTag } from "next/cache";
import { VCO_TAG } from "@/lib/vco/config";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.VCO_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("webhook secret not configured", { status: 500 });
  }

  // Raw body: the signature is over these exact bytes.
  const body = await req.text();
  const timestamp = req.headers.get("x-webhook-timestamp") ?? "";
  const signature = req.headers.get("x-webhook-signature-v1") ?? "";

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${body}`)
    .digest("hex");
  const fresh = Math.abs(Date.now() / 1000 - Number(timestamp)) < 300;
  const valid =
    signature.length === expected.length &&
    timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!fresh || !valid) return new Response("bad signature", { status: 401 });

  let event: unknown;
  try {
    event = (JSON.parse(body) as { event?: unknown }).event;
  } catch {
    return new Response("bad body", { status: 400 });
  }
  if (typeof event === "string" && event.startsWith("product.")) {
    revalidateTag(VCO_TAG, "max");
  }
  return Response.json({ ok: true });
}

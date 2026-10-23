import Link from "next/link";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  listStorefrontProducts,
  resolveIntakeProduct,
} from "@/lib/vco";

type StartPageProps = {
  searchParams: Promise<{ treatment?: string; sku?: string }>;
};

export default async function StartAssessmentPage({ searchParams }: StartPageProps) {
  const params = await searchParams;
  const treatment = params.treatment?.trim().toLowerCase() || null;
  const sku = params.sku?.trim().toUpperCase() || null;

  const products = await listStorefrontProducts();

  let product = treatment
    ? resolveIntakeProduct(products, treatment)
    : resolveIntakeProduct(products, null);

  if (sku) {
    product = products.find((p) => p.sku === sku) || product;
  }

  if (product?.intakeUrl) {
    redirect(product.intakeUrl);
  }

  const available = products.filter((p) => p.intakeUrl);

  return (
    <>
      <Navbar />
      <main className="section" style={{ minHeight: "50vh" }}>
        <div className="container" style={{ maxWidth: "36rem", textAlign: "center" }}>
          <p className="eyebrow">Clinical intake</p>
          <h1>Hosted intake unavailable</h1>
          <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>
            {treatment
              ? `We could not open VirtualClinicOS intake for “${treatment}” yet. The product may not be published in the storefront catalog, or its intake URL is not configured.`
              : "We could not resolve a VirtualClinicOS intake URL for this brand yet."}
          </p>

          {available.length > 0 ? (
            <div style={{ display: "grid", gap: "0.75rem", justifyItems: "center" }}>
              <p style={{ margin: 0, fontWeight: 650 }}>Available programs:</p>
              {available.map((p) => (
                <a key={p.id} href={p.intakeUrl!} className="btn btn-primary">
                  Start {p.name} →
                </a>
              ))}
            </div>
          ) : (
            <Link href="/treatments" className="btn btn-primary">
              Browse treatments →
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

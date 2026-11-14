import NavbarClient from "./NavbarClient";
import { getCatalogSafe } from "@/lib/vco/catalog";

/** Server wrapper: the treatment links come from the VCO catalog. */
export default async function Navbar() {
  const therapies = await getCatalogSafe();
  const treatmentLinks = therapies.map((t) => ({
    label: t.name,
    href: `/treatments/${t.slug}`,
  }));
  return <NavbarClient treatmentLinks={treatmentLinks} />;
}

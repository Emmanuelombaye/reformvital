import Image from "next/image";
import { getTherapyVialImage } from "@/lib/treatmentCatalog";

type TreatmentVialProps = {
  slug: string;
  name: string;
  concentration: string;
  form?: string;
  showSyringe?: boolean;
  className?: string;
  priority?: boolean;
};

/** Photorealistic Scriptful-style product vial — drug name + concentration, no site or GLP branding */
export default function TreatmentVial({
  slug,
  name,
  concentration,
  form = "Injectable solution",
  showSyringe = false,
  className = "",
  priority = false,
}: TreatmentVialProps) {
  const src = getTherapyVialImage(slug, showSyringe ? "thumb" : "hero");
  const square = showSyringe;

  return (
    <Image
      src={src}
      alt={`${name} ${concentration} ${form}`}
      width={square ? 256 : 640}
      height={square ? 256 : 853}
      sizes={square ? "64px" : "(max-width: 768px) 90vw, 640px"}
      quality={75}
      priority={priority}
      className={className}
    />
  );
}

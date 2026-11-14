import Image from "next/image";
import { getTherapyVialImage } from "@/lib/treatmentCatalog";

type TreatmentVialProps = {
  name: string;
  concentration?: string;
  form?: string;
  /** Image from the VCO product (image_url). Preferred when present. */
  imageUrl?: string | null;
  /** Key of bundled vial art (e.g. "semaglutide"), used when the product has no image. */
  artKey?: string | null;
  showSyringe?: boolean;
  className?: string;
  priority?: boolean;
};

/** Product vial: VCO image first, bundled art second, plain label last. */
export default function TreatmentVial({
  name,
  concentration = "",
  form = "",
  imageUrl,
  artKey,
  showSyringe = false,
  className = "",
  priority = false,
}: TreatmentVialProps) {
  const square = showSyringe;
  const alt = [name, concentration, form].filter(Boolean).join(" ");

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        width={square ? 256 : 640}
        height={square ? 256 : 853}
        sizes={square ? "64px" : "(max-width: 768px) 90vw, 640px"}
        unoptimized
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={className}
      />
    );
  }

  if (artKey) {
    return (
      <Image
        src={getTherapyVialImage(artKey, showSyringe ? "thumb" : "hero")}
        alt={alt}
        width={square ? 256 : 640}
        height={square ? 256 : 853}
        sizes={square ? "64px" : "(max-width: 768px) 90vw, 640px"}
        quality={70}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={className}
      />
    );
  }

  return (
    <span className={className} role="img" aria-label={alt}>
      {name}
    </span>
  );
}

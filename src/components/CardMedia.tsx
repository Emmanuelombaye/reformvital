import Image from "next/image";

type CardMediaProps = {
  src: string;
  alt: string;
  aspect?: "1/1" | "3/2" | "4/3" | "16/9";
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const aspectClass: Record<NonNullable<CardMediaProps["aspect"]>, string> = {
  "1/1": "rv-card-media--1x1",
  "3/2": "rv-card-media--3x2",
  "4/3": "rv-card-media--4x3",
  "16/9": "rv-card-media--16x9",
};

/** Fixed card frame — full photo visible, never cropped. */
export default function CardMedia({
  src,
  alt,
  aspect = "3/2",
  sizes = "(max-width: 768px) 90vw, 320px",
  priority = false,
  className = "",
}: CardMediaProps) {
  return (
    <div className={`rv-card-media ${aspectClass[aspect]} ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={60}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="rv-card-media__img"
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
    </div>
  );
}

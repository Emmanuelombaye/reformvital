"use client";

import Image from "next/image";

type DualProductImageProps = {
  primary: string;
  secondary?: string;
  alt: string;
  className?: string;
  /** PeakHealth-style hover crossfade when secondary exists */
  fadeOnHover?: boolean;
};

/**
 * PeakHealth / Cosma product-thumb pattern:
 * stacked primary + secondary images; secondary fades in on hover.
 * Uses next/image so packs get responsive WebP/AVIF delivery.
 */
export default function DualProductImage({
  primary,
  secondary,
  alt,
  className = "",
  fadeOnHover = true,
}: DualProductImageProps) {
  const hasSecondary = Boolean(secondary && secondary !== primary);

  return (
    <div
      className={[
        "rv-dual-img",
        hasSecondary && fadeOnHover ? "rv-dual-img--fade" : "",
        hasSecondary ? "rv-dual-img--paired" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={primary}
        alt={alt}
        fill
        sizes="(max-width: 640px) 45vw, (max-width: 1100px) 30vw, 220px"
        className="rv-dual-img__primary"
        quality={60}
      />
      {hasSecondary && (
        <Image
          src={secondary!}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1100px) 30vw, 220px"
          className="rv-dual-img__secondary"
          quality={60}
          loading="lazy"
          aria-hidden
        />
      )}
    </div>
  );
}

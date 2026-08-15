"use client";

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
      <div
        className="rv-dual-img__primary"
        style={{ backgroundImage: `url(${primary})` }}
        role="img"
        aria-label={alt}
      />
      {hasSecondary && (
        <div
          className="rv-dual-img__secondary"
          style={{ backgroundImage: `url(${secondary})` }}
          aria-hidden
        />
      )}
    </div>
  );
}

import Image from "next/image";

/** Lazy content photo — uses next/image optimizer without competing with LCP. */
export default function FastImg({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  width = 1200,
  height = 800,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className ? `${className} rv-fast-img` : "rv-fast-img"}
      quality={65}
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}

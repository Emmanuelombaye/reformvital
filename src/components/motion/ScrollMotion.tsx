"use client";

import { useEffect } from "react";

const MAX_REVEAL_DELAY_MS = 400;
const FAILSAFE_REVEAL_MS = 2500;

/**
 * Site-wide premium motion engine:
 * scroll reveals · 3D tilt · magnetic hover · nav polish · page enter
 */
export default function ScrollMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("rv-reduce-motion");
      document.querySelectorAll(".rv-reveal, [data-animate]").forEach((el) => {
        el.classList.add("is-inview");
      });
      return;
    }

    const root = document.documentElement;
    root.classList.add("rv-motion-on");
    requestAnimationFrame(() => root.classList.add("rv-page-ready"));

    const observed = new WeakSet<Element>();
    const tilted = new WeakSet<Element>();
    const magnetized = new WeakSet<Element>();
    const ioTargets = new Set<Element>();

    const variants = [
      "rise",
      "peak-fade",
      "tilt-left",
      "tilt-right",
      "bounce",
      "zoom",
      "peak-fade",
      "slide-left",
      "slide-right",
    ];

    const skipClosest =
      "#qualify, header, .promo, .nav, .rv-scroll-progress, .rv-float-orb, .rv-cursor-glow, .rv-treatments-dropdown";

    // Never animate whole page sections — tall blocks at opacity:0 look blank.
    const skipRevealTags = new Set(["SECTION", "MAIN"]);

    const autoSelectors = [
      ".section-head",
      ".rv-how-step",
      ".rv-faq-item",
      ".rv-pillar",
      ".rv-footer-brand",
      ".rv-footer-col",
      ".treatment-card",
      ".rv-yx__head",
      ".rv-yx__card",
      ".rv-yx-tx-card",
      ".rv-yx-featured",
      ".rv-yx-explore",
      ".rv-yx-stage",
      ".rv-yx-side",
      ".rv-yx-protocol",
      ".rv-yx-protocol-card",
      ".rv-yx-expect",
      ".rv-yx-expect-card",
      ".rv-yx-knowall",
      ".rv-yx-catalog__intro",
      ".rv-hiw-page-hero",
      ".rv-hiw-step-card",
      ".rv-hiw-process-card",
      ".rv-hiw-why-card",
      ".rv-hiw-priority__card",
      ".rv-hiw-faq__item",
      ".rv-hiw-cta__grid",
      ".rv-mag-mast",
      ".rv-mag-lead",
      ".rv-mag-bento",
      ".rv-mag-stories",
      ".rv-mag-library",
      ".rv-mag-tools",
      ".rv-resource-feature",
      ".rv-resource-card",
      ".rv-resource-video",
      ".rv-resource-external",
      ".rv-resources-cta",
      ".membership-card",
      ".tier-card",
      ".review-card",
      ".trust-item",
      ".transform-card",
      ".coach-card",
      ".offer-card",
      "main article",
      "main .card",
      ".rv-footer-contact-link",
    ];

    const tiltSelectors = [
      ".rv-tilt",
      "[data-tilt]",
      ".rv-how-visual",
      ".rv-faq-item",
      ".rv-pillar",
      ".treatment-card",
      ".rv-yx__card",
      ".rv-yx-tx-card",
      ".rv-yx-stage",
      ".rv-yx-protocol-card",
      ".rv-yx-expect-card",
      ".rv-resource-feature",
      ".rv-resource-card",
      ".rv-resource-video",
      ".rv-resource-external",
      ".membership-card",
      ".tier-card",
      ".review-card",
      ".transform-card",
      ".coach-card",
    ];

    const magnetSelectors = [
      ".btn",
      ".nav-link",
      ".nav-util",
      ".rv-treatments-trigger",
      ".brand",
      ".rv-footer-cta",
    ];

    const shouldSkipReveal = (el: Element) => {
      if (el.closest(skipClosest)) return true;
      if ((el as HTMLElement).dataset.rvSkipMotion === "1") return true;
      // Allow explicit data-animate on sections; skip bare section/main wrappers
      if (skipRevealTags.has(el.tagName) && !el.hasAttribute("data-animate")) return true;
      if (el.classList.contains("section") && !el.hasAttribute("data-animate")) return true;
      return false;
    };

    const markTargets = () => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        if (shouldSkipReveal(el)) return;
        el.classList.add("rv-reveal");
        ioTargets.add(el);
      });

      autoSelectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el, i) => {
          if (shouldSkipReveal(el)) return;
          if (!el.hasAttribute("data-animate")) {
            el.setAttribute("data-animate", variants[i % variants.length]);
            el.setAttribute("data-delay", String(Math.min((i % 7) * 55, MAX_REVEAL_DELAY_MS)));
          }
          el.classList.add("rv-reveal");
          ioTargets.add(el);
        });
      });

      document
        .querySelectorAll(
          ".rv-resources-feature-grid, .rv-resources-library-grid, .rv-resources-video-grid, .rv-resources-external-grid",
        )
        .forEach((grid) => {
          Array.from(grid.children).forEach((child, i) => {
            if (!(child instanceof HTMLElement)) return;
            if (shouldSkipReveal(child)) return;
            child.setAttribute("data-delay", String(Math.min(i * 80, MAX_REVEAL_DELAY_MS)));
            child.classList.add("rv-reveal");
            if (!child.hasAttribute("data-animate")) {
              child.setAttribute("data-animate", variants[i % variants.length]);
            }
            ioTargets.add(child);
          });
        });
    };

    const revealVisibleNow = () => {
      const vh = window.innerHeight;
      ioTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.98 && rect.bottom > 0) {
          el.classList.add("is-inview");
        }
      });
    };

    const revealStuckElements = () => {
      ioTargets.forEach((el) => {
        if (!el.classList.contains("is-inview")) {
          el.classList.add("is-inview");
        }
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = Math.min(
            Number(entry.target.getAttribute("data-delay") || 0),
            MAX_REVEAL_DELAY_MS,
          );
          window.setTimeout(() => {
            entry.target.classList.add("is-inview");
          }, delay);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -2% 0px" },
    );

    const observeAll = () => {
      markTargets();
      ioTargets.forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          io.observe(el);
        }
      });
      revealVisibleNow();
    };

    observeAll();

    requestAnimationFrame(() => {
      revealVisibleNow();
    });

    const failsafeTimer = window.setTimeout(revealStuckElements, FAILSAFE_REVEAL_MS);

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;
        root.style.setProperty(
          "--rv-scroll-progress",
          String(y / Math.max(document.body.scrollHeight - vh, 1)),
        );
        root.classList.toggle("rv-scrolled", y > 12);

        revealVisibleNow();

        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = Number(el.dataset.parallax || 0.15);
          const rect = el.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
          el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        });

        document.querySelectorAll<HTMLElement>("[data-tilt-scroll]").forEach((el) => {
          const rect = el.getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          const p = (mid - vh / 2) / vh;
          const rotX = Math.max(-12, Math.min(12, p * -18));
          const rotY = Math.max(-8, Math.min(8, p * 10));
          el.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", revealVisibleNow, { passive: true });
    window.addEventListener("load", revealVisibleNow);
    onScroll();

    const onTiltMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--rv-tilt-x", `${(py * -14).toFixed(2)}deg`);
      el.style.setProperty("--rv-tilt-y", `${(px * 16).toFixed(2)}deg`);
      el.style.setProperty("--rv-shine-x", `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--rv-shine-y", `${((py + 0.5) * 100).toFixed(1)}%`);
      el.classList.add("is-tilting");
    };

    const onTiltLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--rv-tilt-x", "0deg");
      el.style.setProperty("--rv-tilt-y", "0deg");
      el.classList.remove("is-tilting");
    };

    const bindTilts = () => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      document.querySelectorAll<HTMLElement>(tiltSelectors.join(",")).forEach((el) => {
        if (tilted.has(el) || el.closest("header .rv-treatments-dropdown")) return;
        tilted.add(el);
        el.classList.add("rv-tilt-live", "rv-card-3d");
        el.addEventListener("mousemove", onTiltMove);
        el.addEventListener("mouseleave", onTiltLeave);
      });
    };

    const onMagnetMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty("--rv-mx", `${(x * 0.28).toFixed(1)}px`);
      el.style.setProperty("--rv-my", `${(y * 0.28).toFixed(1)}px`);
    };

    const onMagnetLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--rv-mx", "0px");
      el.style.setProperty("--rv-my", "0px");
    };

    const bindMagnets = () => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      document.querySelectorAll<HTMLElement>(magnetSelectors.join(",")).forEach((el) => {
        if (magnetized.has(el)) return;
        magnetized.add(el);
        el.classList.add("rv-magnetic");
        el.addEventListener("mousemove", onMagnetMove);
        el.addEventListener("mouseleave", onMagnetLeave);
      });
    };

    const glow = document.querySelector<HTMLElement>(".rv-cursor-glow");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onPointer = (e: PointerEvent) => {
      if (!glow || !finePointer) return;
      glow.style.transform = `translate3d(${e.clientX - 140}px, ${e.clientY - 140}px, 0)`;
      glow.classList.add("is-on");
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    bindTilts();
    bindMagnets();

    let moTimer = 0;
    const mo = new MutationObserver(() => {
      window.clearTimeout(moTimer);
      moTimer = window.setTimeout(() => {
        observeAll();
        bindTilts();
        bindMagnets();
      }, 60);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(failsafeTimer);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", revealVisibleNow);
      window.removeEventListener("load", revealVisibleNow);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <>
      <div className="rv-scroll-progress" aria-hidden />
      <div className="rv-cursor-glow" aria-hidden />
      <div className="rv-float-orb rv-float-orb--a" aria-hidden data-parallax="0.22" />
      <div className="rv-float-orb rv-float-orb--b" aria-hidden data-parallax="-0.14" />
      <div className="rv-float-orb rv-float-orb--c" aria-hidden data-parallax="0.1" />
    </>
  );
}

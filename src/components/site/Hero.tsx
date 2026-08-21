import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import { TELEGRAM } from "@/i18n/content";

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty("--mx", `${x * 100}%`);
        el.style.setProperty("--my", `${y * 100}%`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="grain relative flex min-h-[88svh] items-center overflow-hidden pt-28 pb-20 md:min-h-[92svh] md:pt-32"
      style={{ "--mx": "0%", "--my": "0%" } as React.CSSProperties}
    >
      <div className="warm-veil animate-drift pointer-events-none absolute inset-0 -z-10" />
      <div
        className="animate-breathe pointer-events-none absolute -z-10 h-[70vmax] w-[70vmax] rounded-full blur-[120px]"
        style={{
          top: "calc(-20% + var(--my))",
          right: "calc(-15% + var(--mx))",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--amber-glow) 20%, transparent), transparent 65%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div
          className={`max-w-4xl transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="font-display text-[clamp(2.4rem,6.4vw,5rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.hero.cta2}
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              {t.hero.cta1}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

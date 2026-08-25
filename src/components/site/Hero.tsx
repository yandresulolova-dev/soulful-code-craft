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
      className="grain relative flex min-h-[92svh] items-center overflow-hidden pt-28 pb-16 md:pt-32"
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
          className={`relative overflow-hidden rounded-3xl border border-border bg-surface/25 backdrop-blur-[2px] transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="p-6 sm:p-10 md:p-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {t.hero.badge ?? "Resul Niazdurdyev"}
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.1rem,6vw,4.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-foreground">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
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

          <div className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {t.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-5 sm:px-8 ${i > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""}`}
              >
                <p className="font-display text-xl font-bold tracking-tight text-foreground">{s.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

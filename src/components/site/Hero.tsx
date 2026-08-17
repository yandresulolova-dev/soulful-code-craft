import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import { TELEGRAM } from "@/i18n/content";
import photo from "@/assets/resul.png.asset.json";

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
        el.style.setProperty("--tx", `${x * 14}px`);
        el.style.setProperty("--ty", `${y * 14}px`);
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
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 md:pt-28"
      style={{ "--mx": "0%", "--my": "0%", "--tx": "0px", "--ty": "0px" } as React.CSSProperties}
    >
      <div className="warm-veil animate-drift pointer-events-none absolute inset-0 -z-10" />
      <div
        className="animate-breathe pointer-events-none absolute -z-10 h-[70vmax] w-[70vmax] rounded-full blur-[120px]"
        style={{
          top: "calc(-15% + var(--my))",
          right: "calc(-10% + var(--mx))",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--amber-glow) 22%, transparent), transparent 65%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-primary">{t.hero.kicker}</p>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.03] tracking-tight text-foreground">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              {t.hero.cta1}
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              {t.hero.cta2}
            </a>
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {t.hero.signature}
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transform: "translate3d(var(--tx), var(--ty), 0)" }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-2xl">
            <div
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "radial-gradient(70% 60% at 60% 35%, transparent, color-mix(in oklab, var(--background) 70%, transparent) 100%)",
              }}
            />
            <img
              src={photo.url}
              alt="Resul Niazdurdyev"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="animate-breathe pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, color-mix(in oklab, var(--amber-glow) 28%, transparent), transparent 70%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

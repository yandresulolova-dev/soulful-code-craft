import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { TELEGRAM } from "@/i18n/content";
import { CASE_MEDIA } from "@/lib/case-media";
import { Reveal } from "./Reveal";
import photo from "@/assets/resul.png.asset.json";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.28em] text-primary">{children}</p>
  );
}

export function Stats() {
  const { t } = useLang();
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-12 sm:grid-cols-3 md:px-10 md:py-16">
        {t.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <p className="font-display text-4xl text-foreground md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <SectionLabel>{t.work.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-foreground">
            {t.work.title}
          </h2>
        </Reveal>

        <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 md:-mx-10 md:gap-8 md:px-10">
          {t.cases.map((c, i) => {
            const cover = CASE_MEDIA[c.slug]?.cover;
            return (
              <Reveal
                key={c.slug}
                delay={i * 120}
                className="w-[86%] shrink-0 snap-start sm:w-[70%] lg:w-[48%]"
              >
                <Link
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="group grain relative block overflow-hidden rounded-2xl border border-border transition-colors duration-500 hover:border-primary/40"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                    {cover ? (
                      <img
                        src={cover.url}
                        alt={c.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          className="warm-veil absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-105"
                          style={{ opacity: i === 0 ? 0.9 : 0.6 }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.5rem,7vw,5rem)] tracking-tight text-foreground/85 transition-transform duration-700 group-hover:scale-[1.04]">
                          {c.name}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-end justify-between gap-4 p-5 md:p-7">
                    <div>
                      <h3 className="text-lg text-foreground md:text-xl">{c.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.category}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border px-2.5 py-0.5 text-[11px] leading-5 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="shrink-0 text-sm text-primary opacity-0 transition-all duration-500 group-hover:opacity-100 md:-translate-x-2 md:group-hover:translate-x-0">
                      {t.work.view} →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="scroll-mt-24 border-t border-border px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <SectionLabel>{t.services.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-foreground">
            {t.services.title}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-surface md:p-7">
                <p className="text-xs text-primary">0{i + 1}</p>
                <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="scroll-mt-24 border-t border-border px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-border bg-surface/25 md:grid-cols-[0.75fr_1.25fr]">
            <div className="grain relative border-b border-border md:border-b-0 md:border-r">
              <img
                src={photo.url}
                alt="Resul Niazdurdyev"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-10 md:p-14">
              <SectionLabel>{t.about.label}</SectionLabel>
              <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight tracking-[-0.02em] text-foreground">
                {t.about.title}
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                {t.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLang();
  return (
    <section className="border-t border-border px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal>
          <SectionLabel>{t.process.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-foreground">
            {t.process.title}
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} as="li">
              <div className="relative pt-6">
                <span className="absolute left-0 top-0 h-px w-full bg-border">
                  <span
                    className="block h-px bg-primary transition-all duration-1000"
                    style={{ width: `${25 * (i + 1)}%` }}
                  />
                </span>
                <p className="text-xs tracking-[0.2em] text-primary">{s.n}</p>
                <h3 className="mt-3 text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  return (
    <section
      id="contact"
      className="grain relative scroll-mt-24 overflow-hidden border-t border-border px-5 py-24 md:px-10 md:py-36"
    >
      <div className="warm-veil pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="mx-auto w-full max-w-[900px] text-center">
        <Reveal>
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-tight text-foreground text-glow">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.contact.subtitle}
          </p>
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t.contact.button}
          </a>
          <p className="mt-4 text-sm text-muted-foreground">@Resbelief</p>
        </Reveal>
      </div>
    </section>
  );
}

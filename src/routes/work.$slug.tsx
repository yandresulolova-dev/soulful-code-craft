import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { content } from "@/i18n/content";
import { useLang } from "@/lib/lang";
import { CASE_MEDIA } from "@/lib/case-media";
import { Reveal } from "@/components/site/Reveal";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = content.ru.cases.find((c) => c.slug === params.slug);
    if (!item) throw notFound();
    return { name: item.name, category: item.category, intro: item.intro };
  },
  head: ({ params, loaderData }) => {
    const title = `${loaderData?.name ?? "Case"} — Resul Niazdurdyev`;
    const description = loaderData?.intro ?? "Case study by Resul Niazdurdyev.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CasePage,
});

function CasePage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  const item = t.cases.find((c) => c.slug === slug)!;
  const next = t.cases[(t.cases.findIndex((c) => c.slug === slug) + 1) % t.cases.length]!;
  const media = CASE_MEDIA[slug];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="grain relative overflow-hidden px-5 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
          <div className="warm-veil animate-drift pointer-events-none absolute inset-0 -z-10 opacity-90" />
          <div className="mx-auto w-full max-w-[1400px]">
            <Link to="/" hash="work" className="text-sm text-muted-foreground hover:text-foreground">
              ← {t.caseUi.back}
            </Link>
            <h1 className="mt-8 font-display text-[clamp(2.6rem,9vw,7rem)] leading-none tracking-tight text-foreground">
              {item.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{item.category}</span>
              <span className="text-border">/</span>
              <span>{item.year}</span>
              {item.highlight && (
                <span className="rounded-full border border-primary px-3 py-1 text-primary">
                  {item.highlight}
                </span>
              )}
            </div>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
              {item.intro}
            </p>
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid w-full max-w-[1400px] gap-12 md:grid-cols-2 md:gap-16">
            {item.problem && (
              <Reveal>
                <h2 className="text-xs uppercase tracking-[0.28em] text-primary">{t.caseUi.problem}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.problem}</p>
              </Reveal>
            )}
            <Reveal delay={100}>
              <h2 className="text-xs uppercase tracking-[0.28em] text-primary">{t.caseUi.task}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.task}</p>
            </Reveal>
          </div>
        </section>

        {media && media.shots.length > 0 && (
          <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto w-full max-w-[1400px]">
              <Reveal>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">{t.caseUi.screens}</h2>
              </Reveal>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {media.shots.map((shot, i) => (
                  <Reveal
                    key={shot.url}
                    delay={(i % 2) * 100}
                    className={i === 0 ? "md:col-span-2" : ""}
                  >
                    <div className="rounded-2xl border border-border bg-surface/60 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
                      <img
                        src={shot.url}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full rounded-xl"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto w-full max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">{t.caseUi.done}</h2>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {item.done.map((d, i) => (
                <Reveal as="li" key={d} delay={(i % 3) * 70} className="bg-background">
                  <div className="flex h-full items-start gap-3 p-6">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{d}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto w-full max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-3xl text-foreground md:text-4xl">{t.caseUi.process}</h2>
            </Reveal>
            <ol className="mt-10 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {item.process.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 80} className="bg-background">
                  <div className="flex items-start gap-6 p-6 md:p-8">
                    <span className="font-display text-2xl text-primary">0{i + 1}</span>
                    <span className="pt-1 text-base leading-relaxed text-muted-foreground">{p}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="grain relative overflow-hidden border-t border-border px-5 py-20 md:px-10 md:py-28">
          <div className="warm-veil pointer-events-none absolute inset-0 -z-10 opacity-70" />
          <div className="mx-auto w-full max-w-[900px] text-center">
            <Reveal>
              <h2 className="text-xs uppercase tracking-[0.28em] text-primary">{t.caseUi.result}</h2>
              <p className="mt-6 font-display text-[clamp(1.6rem,4vw,2.8rem)] leading-snug text-foreground">
                {item.result}
              </p>
            </Reveal>
          </div>
        </section>

        {item.testimonial && (
          <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto w-full max-w-[900px]">
              <Reveal>
                <h2 className="text-xs uppercase tracking-[0.28em] text-primary">{t.caseUi.testimonial}</h2>
                <blockquote className="mt-6 font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                  «{item.testimonial.quote}»
                </blockquote>
                <p className="mt-5 text-sm text-muted-foreground">{item.testimonial.author}</p>
              </Reveal>
            </div>
          </section>
        )}

        <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto w-full max-w-[1400px]">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">{t.caseUi.next}</p>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group mt-5 flex flex-wrap items-baseline justify-between gap-4"
            >
              <span className="font-display text-[clamp(2rem,7vw,5rem)] leading-none text-foreground transition-colors duration-500 group-hover:text-primary">
                {next.name}
              </span>
              <span className="text-sm text-muted-foreground">{next.category}</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

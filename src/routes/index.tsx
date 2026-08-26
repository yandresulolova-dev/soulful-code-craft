import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Work, Services, About, Process, Contact } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Resul Niazdurdyev — Веб-дизайн и разработка сайтов" },
      {
        name: "description",
        content:
          "Resul Niazdurdyev создаёт современные сайты, интерфейсы и цифровые продукты — от идеи и дизайна до разработки и запуска.",
      },
      { property: "og:title", content: "Resul Niazdurdyev — Веб-дизайн и разработка сайтов" },
      {
        property: "og:description",
        content:
          "Resul Niazdurdyev создаёт современные сайты, интерфейсы и цифровые продукты — от идеи и дизайна до разработки и запуска.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Resul Niazdurdyev",
          jobTitle: "Web Designer & Developer",
          url: "/",
          sameAs: ["https://t.me/Resbelief"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

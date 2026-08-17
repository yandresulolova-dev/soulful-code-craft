import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { TELEGRAM } from "@/i18n/content";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const home = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { id: "work", label: t.nav.work },
    { id: "services", label: t.nav.services },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <Link to="/" className="text-sm font-medium tracking-[0.18em] uppercase text-foreground">
            Resul<span className="text-primary"> N.</span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={href(l.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border p-0.5 text-xs">
              {(["ru", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
                    lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              className="md:hidden -mr-1 flex h-10 w-10 items-center justify-center"
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 block h-px w-6 bg-foreground transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-6 bg-foreground transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-background px-8 transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="warm-veil pointer-events-none absolute inset-0 opacity-70" />
        <nav className="relative flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.id}
              href={href(l.id)}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-10 inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
        >
          {t.contact.button}
        </a>
      </div>
    </>
  );
}

import { useLang } from "@/lib/lang";
import { TELEGRAM } from "@/i18n/content";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-foreground">Resul Niazdurdyev</p>
          <p className="text-xs text-muted-foreground">{t.footer.role}</p>
        </div>
        <a
          href={TELEGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary transition-opacity hover:opacity-80"
        >
          @Resbelief
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Resul Niazdurdyev. {t.footer.rights}.
        </p>
      </div>
    </footer>
  );
}

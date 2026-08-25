import kodaHero from "@/assets/koda-hero.jpg.asset.json";
import kodaServices from "@/assets/koda-services.jpg.asset.json";
import kodaContact from "@/assets/koda-contact.jpg.asset.json";
import aquaHero from "@/assets/aquagrace-hero.jpg.asset.json";
import aquaAbout from "@/assets/aquagrace-about.jpg.asset.json";
import aquaPricing from "@/assets/aquagrace-pricing.jpg.asset.json";

export type CaseMedia = {
  cover?: { url: string };
  shots: { url: string; alt: string }[];
};

export const CASE_MEDIA: Record<string, CaseMedia> = {
  koda: {
    cover: { url: kodaHero.url },
    shots: [
      { url: kodaHero.url, alt: "KODA — hero screen" },
      { url: kodaServices.url, alt: "KODA — services section" },
      { url: kodaContact.url, alt: "KODA — contact section" },
    ],
  },
  aquagrace: {
    cover: { url: aquaHero.url },
    shots: [
      { url: aquaHero.url, alt: "AquaGrace — hero screen" },
      { url: aquaAbout.url, alt: "AquaGrace — about and metrics" },
      { url: aquaPricing.url, alt: "AquaGrace — training formats and pricing" },
    ],
  },
  "tate-track": { shots: [] },
};

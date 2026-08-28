import kodaHero from "@/assets/koda-hero.jpg";
import kodaServices from "@/assets/koda-services.jpg";
import kodaContact from "@/assets/koda-contact.jpg";
import aquaHero from "@/assets/aquagrace-hero.jpg";
import aquaAbout from "@/assets/aquagrace-about.jpg";
import aquaPricing from "@/assets/aquagrace-pricing.jpg";

export type CaseMedia = {
  cover?: { url: string };
  shots: { url: string; alt: string }[];
};

export const CASE_MEDIA: Record<string, CaseMedia> = {
  koda: {
    cover: { url: kodaHero },
    shots: [
      { url: kodaHero, alt: "KODA — hero screen" },
      { url: kodaServices, alt: "KODA — services section" },
      { url: kodaContact, alt: "KODA — contact section" },
    ],
  },
  aquagrace: {
    cover: { url: aquaHero },
    shots: [
      { url: aquaHero, alt: "AquaGrace — hero screen" },
      { url: aquaAbout, alt: "AquaGrace — about and metrics" },
      { url: aquaPricing, alt: "AquaGrace — training formats and pricing" },
    ],
  },
  "tate-track": { shots: [] },
};

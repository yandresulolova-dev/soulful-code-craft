import kodaHero from "@/assets/koda-hero.jpg.asset.json";
import kodaServices from "@/assets/koda-services.jpg.asset.json";
import kodaContact from "@/assets/koda-contact.jpg.asset.json";

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
  "tate-track": { shots: [] },
};

import yaml from "js-yaml";
import raw from "../data/cv.yaml?raw";

export type Experience = {
  role: string;
  company: string;
  company_note?: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
};

export type Cv = {
  profile: {
    name: string;
    title: string;
    headline: string;
    tagline: string;
    location: string;
    email: string;
    website: string;
    booking: string;
    social: Record<string, string>;
  };
  experience: Experience[];
  speaking: {
    title?: string;
    kind?: string;
    event?: string;
    location?: string;
    year?: number;
    date?: string;
    essay?: string;
    link?: string | null;
    note?: string;
  }[];
  skills: { top: string[]; languages: string[]; ai: string[]; platforms: string[] };
  certifications?: { name: string; issued: string; expired?: string }[];
  education: { school: string; degree: string; years: string }[];
};

export const cv = yaml.load(raw) as Cv;

export function formatPeriod(e: Experience): string {
  const fmt = (s: string) =>
    s === "present"
      ? "present"
      : new Date(`${s.length === 4 ? `${s}-01` : s}-01`).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        });
  return `${fmt(e.start)} — ${fmt(e.end)}`;
}

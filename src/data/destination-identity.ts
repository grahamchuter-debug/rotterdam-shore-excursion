export type LogoConcept = "anchor-arch" | "harbour-m" | "fortress-gate";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Rotterdam",
  descriptor: "Shore Excursion",
  strapline: "Find the best version of your day in Rotterdam",
  accessibleName: "Rotterdam Shore Excursion",
  /** Deep harbour blue + warm brick — maritime and rebuilt-city architecture */
  accent: "harbour-brick",
  logoConcept: "harbour-m" as LogoConcept,
} as const;

export const site = {
  name: "Ostholm Rütter",
  legalName: "Ostholm Rütter Rechtsanwälte PartG mbB",
  claim: "Eine der führenden, international tätigen Wirtschaftskanzleien Deutschlands.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Ostholm Rütter ist eine unabhängige deutsche Wirtschaftskanzlei mit Büros in Frankfurt, Hamburg, München, Berlin, Düsseldorf und Stuttgart. Fiktive Demo-Website.",
  email: "info@ostholm-ruetter.example",
  phone: "+49 69 00000000",
  phoneHref: "tel:+496900000000",
  founded: 1994,
} as const;

export type NavItem = { label: string; href: string; intro?: string; children?: NavItem[] };

export const nav: NavItem[] = [
  {
    label: "Aktuelles",
    href: "/aktuelles",
    intro: "Mandate, Kanzlei-News, Fachbeiträge und Veranstaltungen: was Ostholm Rütter bewegt.",
    children: [
      { label: "Mandate & Kanzlei News", href: "/aktuelles/news" },
      { label: "Know-how", href: "/aktuelles/know-how" },
      { label: "Veranstaltungen", href: "/aktuelles/veranstaltungen" },
    ],
  },
  {
    label: "Kompetenz",
    href: "/kompetenz",
    intro: "Full Service auf höchstem Niveau: zwölf Rechtsgebiete, sechs Branchen, vier Fokusthemen.",
    children: [
      { label: "Beratungsspektrum", href: "/kompetenz/beratungsspektrum" },
      { label: "Branchenschwerpunkte", href: "/kompetenz/branchenschwerpunkte" },
      {
        label: "Fokusthemen",
        href: "/kompetenz/fokusthemen",
        children: [
          { label: "Cybersecurity", href: "/kompetenz/fokusthemen/cybersecurity" },
          { label: "Digital Future", href: "/kompetenz/fokusthemen/digital-future" },
          { label: "ESG", href: "/kompetenz/fokusthemen/esg" },
          { label: "Legal Tech", href: "/kompetenz/fokusthemen/legal-tech" },
        ],
      },
    ],
  },
  { label: "Experten", href: "/experten" },
  {
    label: "Karriere",
    href: "/karriere",
    intro: "Für Juristinnen und Juristen, Legal Talents, Assistenzen und Business Professionals.",
    children: [
      { label: "Karriere bei Ostholm Rütter", href: "/karriere" },
      {
        label: "Lawyers",
        href: "/karriere/lawyers",
        children: [
          { label: "Lawyers", href: "/karriere/lawyers" },
          { label: "Legal Talents", href: "/karriere/lawyers#talents" },
          { label: "Legal Assistants", href: "/karriere/lawyers#assistants" },
          { label: "Business Professionals", href: "/karriere/lawyers#business" },
        ],
      },
      {
        label: "Kultur",
        href: "/karriere/kultur",
        children: [
          { label: "Corporate Culture", href: "/karriere/kultur" },
          { label: "Benefits", href: "/karriere/kultur#benefits" },
          { label: "People", href: "/karriere/kultur#people" },
          { label: "FAQ", href: "/karriere/kultur#faq" },
        ],
      },
      { label: "Jobangebote", href: "/karriere/jobs" },
    ],
  },
  {
    label: "Sozietät",
    href: "/sozietaet",
    intro: "Unabhängig seit 1994. Partnerschaftlich organisiert, unternehmerisch geführt.",
    children: [
      { label: "Über Ostholm Rütter", href: "/sozietaet" },
      { label: "Unsere Werte", href: "/sozietaet/werte" },
      { label: "Unsere Verantwortung", href: "/sozietaet/verantwortung" },
      { label: "Historie", href: "/sozietaet/historie" },
      { label: "Auszeichnungen", href: "/sozietaet/auszeichnungen" },
      { label: "Standorte", href: "/sozietaet/standorte" },
    ],
  },
  { label: "International", href: "/international" },
];

export const footerLinks = [
  { label: "Alumni", href: "/karriere#alumni" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Mitarbeiterportal", href: "/kontakt" },
] as const;

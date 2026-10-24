export const siteConfig = {
    name: "Ground Attire",
    title: "Ground Attire — Architecture that belongs to the ground",
    tagline: "Architecture that belongs to the ground.",
    description:
      "Ground Attire is an architecture studio in Zurich and Santa Fe. Every project begins by listening to the site, then is shaped by place, material and light.",
    // No trailing slash, so `${siteConfig.url}/projects` never becomes "//projects"
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
    locale: "en_US",
    founded: 2018,
    nav: [
      { label: "Studio", href: "/studio" },
      { label: "Projects", href: "/projects" },
      { label:"Services", href: "/services" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
      { label: "Client", href: "/client" },
    ],
  } as const;
  
  export type SiteConfig = typeof siteConfig;
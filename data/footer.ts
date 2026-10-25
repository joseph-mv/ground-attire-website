import type { FooterContent } from "@/types/footer";

const footerContent: FooterContent = {
  brand: {
    wordmark: "Ground Attire",
    sublabel: "Architects",
    description:
      "An architecture practice in Kozhikode, working across buildings, interiors, landscapes, art and events.",
  },
  siteLinks: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Studio", href: "/studio" },
    { label: "Inquiries", href: "/contact" },
    { label: "Insights", href: "/journal" },
  ],
  studio: {
    name: "Ground Attire",
    addressLines: ["KSHB Cross Road, West Nadakkavu", "Kozhikode, Kerala 673006"],
    phones: [
      { display: "+91 755 88 758 77", href: "tel:+917558875877" },
    ],
    email: {
      display: "groundattire@gmail.com",
      href: "mailto:groundattire@gmail.com",
    },
  },
  elsewhere: [
    {
      label: "Instagram",
      value: "@groundattire",
      href: "https://www.instagram.com/groundattire/",
    },
    { label: "LinkedIn", value: "Ground Attire" },
    { label: "ArchDaily", value: "Office profile" },
    {
      label: "Facebook",
      value: "/groundattire",
      href: "https://www.facebook.com/groundattire",
    },
  ],
  legal: {
    copyright: "© 2026 Ground Attire. Drawn and built in Kozhikode.",
    rights: "All rights reserved.",
  },
  quickContact: {
    primaryPhone: "+917558875877",
    whatsAppHref: "https://wa.me/917558875877",
    whatsAppAriaLabel: "Chat on WhatsApp",
    callAriaLabel: "Call Ground Attire",
  },
};

export default footerContent;

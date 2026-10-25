export type FooterNavLink = {
  label: string;
  href: string;
};

export type FooterSocialLink = {
  label: string;
  value: string;
  href?: string;
};

export type FooterContent = {
  brand: {
    wordmark: string;
    sublabel: string;
    description: string;
  };
  siteLinks: FooterNavLink[];
  studio: {
    name: string;
    addressLines: string[];
    phones: { display: string; href: string }[];
    email: { display: string; href: string };
  };
  elsewhere: FooterSocialLink[];
  legal: {
    copyright: string;
    rights: string;
  };
  quickContact: {
    primaryPhone: string;
    whatsAppHref: string;
    whatsAppAriaLabel: string;
    callAriaLabel: string;
  };
};

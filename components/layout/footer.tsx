import Link from "next/link";
import { Phone } from "lucide-react";

import { getFooterContent } from "@/lib/footer";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FooterColumnHeading({ children }: { children: string }) {
  return (
    <p className="type-label text-muted-foreground mb-5 md:mb-6">{children}</p>
  );
}

export async function Footer() {
  const content = await getFooterContent();
  const { brand, siteLinks, studio, elsewhere, legal, quickContact } = content;

  return (
    <footer className="surface-dark relative">
      <div className="container-page border-t border-border pt-12 pb-28 md:pt-16 md:pb-20 lg:pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-4 lg:gap-x-10">
          {/* Brand — desktop only */}
          <div className="hidden lg:block">
            <Link
              href="/"
              className="group inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <span className="font-heading text-h3 font-light tracking-tight text-foreground">
                {brand.wordmark}
              </span>
              <span className="type-label mt-1 block text-muted-foreground group-hover:text-foreground/80">
                {brand.sublabel}
              </span>
            </Link>
            <p className="text-body-sm mt-6 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              {brand.description}
            </p>
          </div>

          {/* Site — desktop only */}
          <nav aria-label="Footer site" className="hidden lg:block">
            <FooterColumnHeading>Site</FooterColumnHeading>
            <ul className="flex flex-col gap-3">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-label text-foreground link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio */}
          <div>
            <FooterColumnHeading>Studio</FooterColumnHeading>
            <address className="text-body-sm not-italic text-foreground">
              <p>{studio.name}</p>
              <p className="mt-3 text-muted-foreground">
                {studio.addressLines.map((line, index) => (
                  <span key={line}>
                    {index > 0 ? <br /> : null}
                    {line}
                  </span>
                ))}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {studio.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="link-underline text-foreground"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={studio.email.href}
                    className="link-underline text-foreground"
                  >
                    {studio.email.display}
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Elsewhere */}
          <div>
            <FooterColumnHeading>Elsewhere</FooterColumnHeading>
            <ul className="flex flex-col gap-4">
              {elsewhere.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[minmax(5.5rem,auto)_1fr] items-baseline gap-x-4 text-body-sm sm:grid-cols-[7rem_1fr]"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-right text-foreground sm:text-left"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-right text-foreground sm:text-left">
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 md:mt-16 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:pr-24">
          <p className="text-body-sm text-muted-foreground">{legal.copyright}</p>
          <p className="text-body-sm mt-2 text-muted-foreground lg:mt-0 lg:shrink-0">
            {legal.rights}
          </p>
        </div>
      </div>

      {/* Fixed contact actions */}
      <div
        className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        aria-label="Quick contact"
      >
        <a
          href={quickContact.whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={quickContact.whatsAppAriaLabel}
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href={`tel:${quickContact.primaryPhone}`}
          aria-label={quickContact.callAriaLabel}
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Phone className="size-5" strokeWidth={1.75} aria-hidden />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

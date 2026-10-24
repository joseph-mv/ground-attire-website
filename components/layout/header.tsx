import Image from "next/image";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { siteConfig } from "@/config/site";

export function Header() {

  return (
    <header className="sticky w-full top-0 z-40">
      {/* 3 equal-weight columns on desktop keeps the nav truly centred */}
      <div className="container-page grid h-18 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="type-label text-foreground flex w-fit items-center gap-3 font-medium"
        >
          <Image
            src="/images/home/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
          />
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="type-label text-foreground/75 hover:text-foreground data-active:text-foreground py-2 transition-colors data-active:underline data-active:decoration-1 data-active:underline-offset-8"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>


        <MobileNav items={siteConfig.nav} />
      </div>
    </header>
  );
}

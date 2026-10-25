"use client";

import { useState } from "react";

import { NavLink } from "@/components/layout/nav-link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type MobileNavProps = {
  items: readonly { label: string; href: string }[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="type-label -mr-3 justify-self-end p-3 md:hidden">
        Menu
      </SheetTrigger>

      <SheetContent side="right" className="bg-linen">
        <SheetHeader>
          <SheetTitle className="type-label">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile" className="px-4">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="border-border border-b first:border-t">
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-h3 text-foreground/75 data-active:text-foreground block py-4"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

      </SheetContent>
    </Sheet>
  );
}

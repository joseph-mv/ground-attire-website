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
import { Separator } from "@base-ui/react/separator";
import { Menu } from "lucide-react";

type MobileNavProps = {
  items: readonly { label: string; href: string }[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="type-label -mr-3 justify-self-end p-3 md:hidden">
        <Menu/>
      </SheetTrigger>

      <SheetContent side="right" className="bg-background/80">
        <SheetHeader className="ml-4 h-10">
          <SheetTitle className="type-label">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>
        </SheetHeader>
        <Separator className="h-0.5 bg-border border-border" />
        <nav aria-label="Mobile" className="px-4">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href} className="ml-4">
                <NavLink
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-h3  text-foreground/75 data-active:text-foreground block py-4"
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

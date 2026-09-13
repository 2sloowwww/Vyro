"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  { href: "/#features", label: "Fabric" },
  { href: "/#product", label: "Shop" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="/#top" className="flex items-center" aria-label="VYRO home">
          <Logo className="h-11 w-11" />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor-hover
              className="text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            render={<a href="/#pricing" />}
            nativeButton={false}
            className="rounded-none bg-primary px-6 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/85"
          >
            Shop now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 cursor-pointer items-center justify-center text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-none px-3 py-3 text-base font-semibold uppercase tracking-wide text-foreground/80 hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button
            render={<a href="/#pricing" />}
            nativeButton={false}
            className="mt-2 w-full rounded-none bg-primary text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/85"
          >
            Shop now
          </Button>
        </nav>
      )}
    </header>
  );
}

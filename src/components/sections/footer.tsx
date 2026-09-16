import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { InstagramIcon } from "./instagram-icon";
import { Logo } from "./logo";
import { WhatsAppIcon } from "./whatsapp-icon";

const columns = [
  {
    title: "Product",
    links: [
      { label: "The VYRO Tee", href: "/#product" },
      { label: "Fabric", href: "/#features" },
      { label: "Size guide", href: "/#faq" },
      { label: "Care instructions", href: "/#faq" },
    ],
  },
  {
    title: "Brand",
    links: [
      { label: "Sustainability", href: "/#features" },
      { label: "Contact", href: "mailto:hello@vyrostore.in" },
      {
        label: "Instagram",
        href: "https://www.instagram.com/vyrostore.in/",
        external: true,
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Shipping", href: "/#faq" },
      { label: "Returns", href: "/#faq" },
      {
        label: "WhatsApp us",
        href: whatsappLink("Hi VYRO, I have a question."),
        external: true,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/#top" className="inline-flex" aria-label="VYRO home">
              <Logo className="h-14 w-14" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The plain tee, made properly.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="mailto:hello@vyrostore.in"
                aria-label="Email VYRO"
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="tel:+918459501931"
                aria-label="Call VYRO"
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/vyrostore.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VYRO on Instagram"
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink("Hi VYRO, I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order VYRO on WhatsApp"
                data-cursor-hover
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        data-cursor-hover
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} VYRO. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" data-cursor-hover className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" data-cursor-hover className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

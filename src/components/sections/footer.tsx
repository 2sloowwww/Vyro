import { Mail, MessageCircle, Rss } from "lucide-react";
import { Logo } from "./logo";

const columns = [
  {
    title: "Product",
    links: ["The Staple Tee", "Shades", "Size guide", "Care instructions"],
  },
  {
    title: "Company",
    links: ["About", "Sustainability", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Help center", "Shipping", "Returns", "Warranty"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <a href="#top" className="inline-flex" aria-label="VYRO home">
              <Logo className="h-14 w-14" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The plain black t-shirt, made properly — heavyweight cotton,
              garment-dyed, built to outlast the wash.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Email Staple"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Staple community chat"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Staple blog"
                className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Rss className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Staple. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" data-cursor-hover className="hover:text-foreground">
              Privacy
            </a>
            <a href="/terms" data-cursor-hover className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappLink } from "@/lib/whatsapp";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Message us on WhatsApp with the fit, shade, and size you want and we'll confirm availability and payment over chat — just tap \"Order on WhatsApp\" on any product.",
  },
  {
    question: "Is Cash on Delivery (COD) available?",
    answer:
      "Yes — COD is available on orders over ₹999, along with free shipping at that same threshold. Below ₹999, we'll share prepaid payment options over WhatsApp.",
  },
  {
    question: "Will the color fade?",
    answer:
      "VYRO fabric is dyed before it's cut and sewn, so the color is locked into the yarn itself rather than applied afterward — giving deeper, more even color that holds up better over time than a standard printed or after-dyed tee.",
  },
  {
    question: "What's the fabric like?",
    answer:
      "240gsm heavyweight cotton, knitted from premium yarn with a soft French terry interior — so it feels substantial without losing softness against the skin.",
  },
  {
    question: "How does the fit run?",
    answer:
      "True to size with a tapered, modern cut. If you're between sizes or prefer a boxier look, we recommend sizing up.",
  },
  {
    question: "How do I wash and care for it?",
    answer:
      "Machine wash cold, inside out, with like colors. Avoid bleach. Tumble dry low or hang dry. If ironing, do it inside out on low heat.",
  },
  {
    question: "Is VYRO sustainable?",
    answer:
      "We keep it practical: close to zero plastic across production and delivery, and a heavyweight fabric built to hold up wash after wash so it stays in your daily rotation instead of the landfill after a season.",
  },
  {
    question: "What's the return policy?",
    answer:
      "A no-questions-asked 20-day return window on every order.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="text-center">
        <h2 className="text-3xl font-black uppercase sm:text-4xl">
          Questions? Answered.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Still curious about something? Reach out at hello@vyrostore.in,
          call{" "}
          <a
            href="tel:+918459501931"
            data-cursor-hover
            className="whitespace-nowrap text-foreground underline underline-offset-2"
          >
            +91 84595 01931
          </a>
          , or{" "}
          <a
            href={whatsappLink("Hi VYRO, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="text-foreground underline underline-offset-2"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </div>

      <Accordion className="mt-10 w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-heading text-lg font-bold hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

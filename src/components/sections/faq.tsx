import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will the black fade after a few washes?",
    answer:
      "No — because VYRO is garment-dyed after the tee is sewn, the color runs deeper into the fibers than a standard pre-dyed shirt. Wash cold and it'll hold up for 50+ washes.",
  },
  {
    question: "How does the fit run?",
    answer:
      "True to size with a tapered, modern cut. If you're between sizes or prefer a boxier look, we recommend sizing up.",
  },
  {
    question: "What's the fabric weight?",
    answer:
      "240gsm combed cotton — noticeably heavier than a typical fast-fashion tee, so it drapes better and doesn't go sheer.",
  },
  {
    question: "What's the return policy?",
    answer:
      "Free size exchanges and a no-questions-asked 60-day return window on every order.",
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
          Still curious about something? Reach out at hello@VYRO.example.
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

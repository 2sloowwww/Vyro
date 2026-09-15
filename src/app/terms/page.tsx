import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — VYRO",
  description: "The terms that govern your use of the VYRO website and purchases.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="January 1, 2026">
      <section>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to
          and use of the VYRO website and any purchases made through it.
          By using our site, you agree to these Terms.
        </p>
      </section>

      <section>
        <h2>Orders and payment</h2>
        <p>
          All orders are subject to acceptance and availability. We reserve
          the right to refuse or cancel any order for reasons including
          product availability, pricing errors, or suspected fraud. Prices
          are listed in USD and do not include applicable taxes or duties
          unless stated otherwise.
        </p>
      </section>

      <section>
        <h2>Shipping</h2>
        <p>
          Estimated delivery times are provided at checkout and are not
          guaranteed. Risk of loss and title for items purchased pass to you
          upon delivery to the shipping carrier.
        </p>
      </section>

      <section>
        <h2>Returns and exchanges</h2>
        <p>
          We offer free size exchanges and accept returns within 60 days of
          delivery for a full refund, provided items are unworn, unwashed,
          and in their original condition with tags attached.
        </p>
      </section>

      <section>
        <h2>Refund policy</h2>
        <p>
          Once we receive and inspect your returned item, we&apos;ll notify
          you that your refund has been approved. Approved refunds are
          issued to your original payment method within 5&ndash;10 business
          days, depending on your bank or card issuer&apos;s processing
          times.
        </p>
        <ul>
          <li>
            Original shipping fees are non-refundable unless the return is
            due to our error (e.g. a defective or incorrect item).
          </li>
          <li>
            Items must be unworn, unwashed, and returned with original tags
            to qualify for a full refund.
          </li>
          <li>
            Sale items and final-sale bundles are refundable only if
            defective.
          </li>
          <li>
            If 10 business days have passed since your refund was approved
            and you haven&apos;t seen it posted, contact your bank first,
            then reach out to us at hello@vyro.example.
          </li>
        </ul>
      </section>

      <section>
        <h2>Product descriptions</h2>
        <p>
          We attempt to be as accurate as possible in describing our
          products, including fabric weight, fit, and color. We do not
          warrant that product descriptions or other content are entirely
          accurate, complete, or error-free.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          All content on this site, including text, graphics, logos, and
          images, is the property of VYRO or its licensors and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works without our
          prior written consent.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, VYRO shall not be liable
          for any indirect, incidental, special, or consequential damages
          arising out of your use of, or inability to use, the site or our
          products.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          VYRO is registered, without regard to its conflict of law
          principles.
        </p>
      </section>

      <section>
        <h2>Changes to these terms</h2>
        <p>
          We may revise these Terms at any time. Continued use of the site
          after changes are posted constitutes acceptance of the revised
          Terms.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about these Terms? Reach us at hello@vyro.example.
        </p>
      </section>
    </LegalLayout>
  );
}

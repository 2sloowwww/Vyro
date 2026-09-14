import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — VYRO",
  description: "How VYRO collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 1, 2026">
      <section>
        <p>
          This Privacy Policy describes how VYRO (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares
          information when you visit or make a purchase from our website.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p>When you visit the site, we may collect:</p>
        <ul>
          <li>
            Contact details you provide, such as name, email address,
            shipping address, and phone number.
          </li>
          <li>
            Order information, including items purchased, payment details,
            and billing address.
          </li>
          <li>
            Device and usage information, such as browser type, IP address,
            and pages viewed, collected automatically via cookies and
            similar technologies.
          </li>
        </ul>
      </section>

      <section>
        <h2>How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Fulfill orders and communicate with you about your purchase.</li>
          <li>Improve and optimize our site, products, and marketing.</li>
          <li>Detect and prevent fraud or other prohibited activity.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Sharing your information</h2>
        <p>
          We share information with service providers who help us operate
          our business — payment processors, shipping carriers, and
          analytics providers — solely to the extent necessary to provide
          their services. We do not sell your personal information.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          We use cookies to keep track of items in your cart, understand how
          you interact with our site, and improve your browsing experience.
          You can disable cookies through your browser settings, though some
          parts of the site may not function properly as a result.
        </p>
      </section>

      <section>
        <h2>Your rights</h2>
        <p>
          Depending on where you live, you may have the right to access,
          correct, delete, or export the personal information we hold about
          you. To exercise these rights, contact us at
          hello@vyro.example.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We retain your information for as long as necessary to fulfill the
          purposes described in this policy, unless a longer retention
          period is required or permitted by law.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post
          any changes on this page and update the &quot;last updated&quot;
          date above.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Questions about this policy? Reach us at hello@vyro.example.
        </p>
      </section>
    </LegalLayout>
  );
}

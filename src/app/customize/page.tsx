import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/sections/whatsapp-button";
import { CustomizeStudio } from "@/components/customize/customize-studio";

// Folded away from public view until the design library has real content.
// Flip this back to true (and re-add the nav/footer links) to relaunch it.
const CUSTOMIZE_ENABLED = false;

export const metadata: Metadata = {
  title: "Customize Your Own Tee",
  description:
    "Upload your own design, preview it on a VYRO tee in 3D, and order your custom print on WhatsApp.",
  robots: { index: false, follow: false },
};

export default function CustomizePage() {
  if (!CUSTOMIZE_ENABLED) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <CustomizeStudio />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/sections/custom-cursor";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Staple — The plain black t-shirt, perfected",
  description:
    "Staple is a plain black t-shirt cut from heavyweight combed cotton, garment-dyed for a deep, even black that holds up wash after wash.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

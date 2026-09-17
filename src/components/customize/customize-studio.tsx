"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { whatsappLink } from "@/lib/whatsapp";
import type { Placement } from "./tshirt-viewer";
import { DesignLibrary } from "./design-library";

const TshirtViewer = dynamic(
  () => import("./tshirt-viewer").then((m) => m.TshirtViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-square w-full items-center justify-center bg-secondary text-sm text-muted-foreground">
        Loading 3D preview…
      </div>
    ),
  }
);

const MAX_FILE_BYTES = 8 * 1024 * 1024;

const PLACEMENTS: { value: Placement; label: string }[] = [
  { value: "front", label: "Front" },
  { value: "back", label: "Back" },
  { value: "sleeve", label: "Sleeve" },
  { value: "shoulder", label: "Shoulder" },
];

type DesignSource = "upload" | "library";

export function CustomizeStudio() {
  const [shadeIndex, setShadeIndex] = useState(0);
  const [placement, setPlacement] = useState<Placement>("front");
  const [source, setSource] = useState<DesignSource>("upload");
  const [decalImage, setDecalImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [presetId, setPresetId] = useState<string | null>(null);
  const [presetName, setPresetName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const shade = products[shadeIndex];
  const placementLabel = PLACEMENTS.find((p) => p.value === placement)!.label;

  function clearDesign() {
    setDecalImage(null);
    setFileName(null);
    setPresetId(null);
    setPresetName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function selectSource(next: DesignSource) {
    setSource(next);
    clearDesign();
  }

  function handleFile(file: File | undefined) {
    setError(null);
    if (!file) return;
    if (file.type !== "image/png") {
      setError("Please upload a PNG file.");
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setError("File is too large — please keep it under 8MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setDecalImage(reader.result as string);
      setFileName(file.name);
      setPresetId(null);
      setPresetName(null);
    };
    reader.readAsDataURL(file);
  }

  function handlePresetSelect(id: string, image: string, name: string) {
    setDecalImage(image);
    setPresetId(id);
    setPresetName(name);
    setFileName(null);
  }

  const designDescription = presetName
    ? `the "${presetName}" design from your design library`
    : fileName
      ? `my design image (${fileName}), which I'll attach in this chat`
      : null;

  const orderMessage = decalImage && designDescription
    ? `Hi VYRO, I'd like to order a custom-print ${shade.name} tee in ${shade.shade} with a ${placementLabel.toLowerCase()} print using ${designDescription}.`
    : `Hi VYRO, I'd like to order a custom-print ${shade.name} tee in ${shade.shade}.`;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Print on demand
      </p>
      <h1 className="mt-2 max-w-2xl text-3xl font-black uppercase sm:text-4xl">
        Design your own VYRO tee
      </h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Upload your own PNG, preview it on the tee in 3D, then send it to us
        on WhatsApp to confirm print size, placement, and price.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <TshirtViewer color={shade.swatch} decalImage={decalImage} placement={placement} />
          {decalImage && (
            <p className="mt-2 text-xs text-muted-foreground">
              Tip: click and drag your design directly on the tee to fine-tune
              its position.
            </p>
          )}
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
            1. Pick a fit
          </h2>
          <div className="mt-3 flex gap-3">
            {products.map((product, i) => (
              <button
                key={product.slug}
                type="button"
                onClick={() => setShadeIndex(i)}
                data-cursor-hover
                className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  i === shadeIndex
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/80 hover:border-foreground"
                }`}
              >
                <span
                  className="h-3 w-3 shrink-0 border border-border/50"
                  style={{ backgroundColor: product.swatch }}
                  aria-hidden="true"
                />
                {product.name}
              </button>
            ))}
          </div>

          <h2 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-foreground">
            2. Choose placement
          </h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {PLACEMENTS.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setPlacement(p.value)}
                data-cursor-hover
                className={`border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  p.value === placement
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground/80 hover:border-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <h2 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-foreground">
            3. Choose your design
          </h2>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => selectSource("library")}
              data-cursor-hover
              className={`flex-1 border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                source === "library"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/80 hover:border-foreground"
              }`}
            >
              Design library
            </button>
            <button
              type="button"
              onClick={() => selectSource("upload")}
              data-cursor-hover
              className={`flex-1 border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                source === "upload"
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground/80 hover:border-foreground"
              }`}
            >
              Upload your own
            </button>
          </div>

          {source === "library" ? (
            <div className="mt-3">
              <DesignLibrary selectedId={presetId} onSelect={handlePresetSelect} />
            </div>
          ) : (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />

              {decalImage && fileName ? (
                <div className="mt-3 flex items-center justify-between border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={decalImage}
                      alt="Uploaded design preview"
                      className="h-12 w-12 border border-border object-contain bg-background"
                    />
                    <span className="text-sm text-muted-foreground">{fileName}</span>
                  </div>
                  <button
                    type="button"
                    aria-label="Remove design"
                    data-cursor-hover
                    onClick={clearDesign}
                    className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3 flex w-full flex-col items-center gap-2 border border-dashed border-border py-10 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <UploadCloud className="h-6 w-6" aria-hidden="true" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Click to upload a PNG
                  </span>
                  <span className="text-xs">Transparent background works best · up to 8MB</span>
                </button>
              )}
            </>
          )}

          {error && <p className="mt-2 text-sm text-destructive">{error}</p>}

          <h2 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-foreground">
            4. Confirm on WhatsApp
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Custom prints are priced based on design size and placement —
            send your design over and we&apos;ll confirm the price before you
            order.
          </p>

          <Button
            render={
              <a
                href={whatsappLink(orderMessage)}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
              />
            }
            nativeButton={false}
            className="mt-4 w-full rounded-none text-sm font-bold uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/85"
          >
            Order Custom Print on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}

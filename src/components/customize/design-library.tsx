"use client";

import { useMemo, useState } from "react";
import { Check, Shirt } from "lucide-react";
import { designPresets, getDesignCategories } from "@/lib/design-presets";

export function DesignLibrary({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (presetId: string, image: string, name: string) => void;
}) {
  const categories = useMemo(() => getDesignCategories(designPresets), []);
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  if (designPresets.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 border border-dashed border-border py-12 text-center text-muted-foreground">
        <Shirt className="h-6 w-6" aria-hidden="true" />
        <p className="text-sm font-semibold uppercase tracking-wide">
          Design library launching soon
        </p>
        <p className="max-w-xs text-xs">
          We&apos;re adding print-ready designs here. In the meantime, upload
          your own PNG below.
        </p>
      </div>
    );
  }

  const visible = designPresets.filter((preset) => {
    const matchesCategory = category === "all" || preset.category === category;
    const matchesQuery = preset.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            data-cursor-hover
            className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              category === "all"
                ? "bg-foreground text-background"
                : "bg-secondary text-foreground/70 hover:text-foreground"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              data-cursor-hover
              className={`px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                category === c
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {designPresets.length > 8 && (
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search designs…"
          className="mt-3 w-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
        />
      )}

      {visible.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">
          No designs match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {visible.map((preset) => {
            const isSelected = selectedId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelect(preset.id, preset.image, preset.name)}
                data-cursor-hover
                aria-label={`Use ${preset.name} design`}
                aria-pressed={isSelected}
                className={`group relative flex aspect-square items-center justify-center border bg-card p-3 transition-colors ${
                  isSelected
                    ? "border-foreground"
                    : "border-border hover:border-foreground/50"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preset.image}
                  alt={preset.name}
                  className="h-full w-full object-contain"
                />
                {isSelected && (
                  <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-foreground text-background">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export type DesignPreset = {
  id: string;
  name: string;
  category: string;
  image: string;
};

// Add real designs here as they're supplied — drop the PNG into
// public/designs/ and add one entry below. Categories are derived
// automatically from whatever's used here, so new categories need no
// other code changes.
export const designPresets: DesignPreset[] = [];

export function getDesignCategories(presets: DesignPreset[]): string[] {
  return Array.from(new Set(presets.map((p) => p.category))).sort();
}

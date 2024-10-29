export type CategoriesSlug =
  | "dermocosmetica"
  | "cosmetica"
  | "higiene"
  | "dietetica"
  | "optica"
  | "herbolario"
  | "nutricion-deportiva"
  | "salud"
  | "cabello"
  | "bebes-y-mamas"
  | "ortopedia"
  | "cosmetica-natural"
  | "promociones";

export interface Categories {
  documentId: string;
  name: string;
  slug: CategoriesSlug;
  image: string;
  isHighlightedCategory: boolean;
  order: number;
}

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
  | "cosmetica-natural";

export interface Categories {
  documentId: string;
  name: string;
  slug: CategoriesSlug;
  image: string;
  isHighlightedCategory: boolean;
}

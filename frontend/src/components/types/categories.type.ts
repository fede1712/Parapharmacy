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

export interface ProductsResponse {
  brand: { id: 10; documentId: string; name: string };
  category: { id: 4; documentId: string; name: string };
  description: string;
  discount: number;
  documentId: string;
  id: number;
  images: { documentId: string; id: number; url: string }[];
  name: string;
  price: number;
  quantity: string;
  stock: number;
  slug: string;
}

export interface Products {
  documentId: string;
  image: string;
  name: string;
  slug: string;
}

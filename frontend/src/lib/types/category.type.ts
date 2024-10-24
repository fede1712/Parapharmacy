export interface Category {
  documentId: string;
  name: string;
  slug: string;
  isHighlightedCategory: boolean;
  image: { id: number; documentId: string; url: string };
}

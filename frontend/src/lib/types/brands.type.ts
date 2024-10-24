export interface Brand {
  documentId: string;
  name: string;
  slug: string;
  description: string;
  image: { id: number; documentId: string; url: string };
}

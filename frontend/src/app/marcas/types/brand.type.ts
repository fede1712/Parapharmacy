export interface Brand {
  name: string;
  slug: string;
  image: string;
  documentId: string;
}

export interface ResponseBrand {
  documentId: string;
  id: 12;
  image: { id: 42; documentId: string; url: string };
  name: string;
  slug: string;
}

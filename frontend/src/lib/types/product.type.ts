export interface Product {
  name: string;
  description: string;
  slug: string;
  price: number;
  stock: number;
  quantity: string;
  discount: number;
  brand: { name: string };
  category: { name: string };
  images: { url: string }[];
}

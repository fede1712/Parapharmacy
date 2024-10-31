import { query } from "./strapi";
import { Product } from "./types/product.type";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getProducts(locale: string = "es") {
  try {
    return query(
      `products?fields[0]=name&fields[1]=description&fields[2]=price&fields[3]=stock&fields[4]=quantity&fields[5]=discount&populate[brand][fields][0]=name&populate[category][fields][0]=name&populate[images][fields][0]=url&locale=${locale}`
    ).then((res) => {
      return res.data.map((product: Product) => {
        const {
          name,
          slug,
          description,
          price,
          stock,
          quantity,
          discount,
          brand,
          category,
          images: rawImages,
        } = product;
        const image = `${NEXT_PUBLIC_STRAPI_HOST}/${rawImages[0].url}`;
        return { name, slug, description, price, stock, quantity, discount, brand, category, image };
      });
    });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
}

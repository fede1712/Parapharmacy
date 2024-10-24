import { query } from "./strapi";
import { Brand } from "./types/brands.type";
const { STRAPI_HOST } = process.env;

export async function getBrands(locale: string = "es") {
  return query(
    `brands?fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url&locale=${locale}`
  ).then((res) => {
    return res.data.map((brand: Brand) => {
      const { name, slug, description, image: rawImage, documentId } = brand;
      const image = `${STRAPI_HOST}/${rawImage.url}`;
      return { name, slug, description, image, documentId };
    });
  });
}

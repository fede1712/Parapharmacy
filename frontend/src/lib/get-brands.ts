import { query } from "./strapi";
import { Brand } from "./types/brands.type";
const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getBrands(searchTerm?: string, locale: string = "es") {
  let url;

  if (searchTerm) {
    url = `brands?filters[name][$contains]=${searchTerm}&fields[0]=name&fields[1]=description&populate[image][fields][0]=url&locale=${locale}`;
  } else {
    url = `brands?fields[0]=name&fields[1]=description&populate[image][fields][0]=url&locale=${locale}`;
  }

  return query(url).then((res) => {
    return res.data.map((brand: Brand) => {
      const { name, slug, description, image: rawImage, documentId } = brand;
      const image = `${NEXT_PUBLIC_STRAPI_HOST}/${rawImage.url}`;
      return { name, slug, description, image, documentId };
    });
  });
}

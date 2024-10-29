import { query } from "./strapi";
import { Category } from "./types/category.type";
const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getCategories(locale: string = "es") {
  return query(
    `categories?fields[0]=name&fields[1]=slug&fields[2]=isHighlightedCategory&fields[3]=order&populate[image][fields][0]=url&locale=${locale}`
  ).then((res) => {
    return res.data.map((category: Category) => {
      const { name, slug, image: rawImage, documentId, isHighlightedCategory, order } = category;
      const image = `${NEXT_PUBLIC_STRAPI_HOST}/${rawImage?.url}`;
      return { name, slug, image, documentId, isHighlightedCategory, order };
    });
  });
}

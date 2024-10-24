import { query } from "./strapi";
import { Category } from "./types/category.type";
const { STRAPI_HOST } = process.env;

export async function getCategories(locale: string = "es") {
  return query(
    `categories?fields[0]=name&fields[1]=slug&fields[2]=isHighlightedCategory&populate[image][fields][0]=url&locale=${locale}`
  ).then((res) => {
    return res.data.map((category: Category) => {
      const { name, slug, image: rawImage, documentId, isHighlightedCategory } = category;
      const image = `${STRAPI_HOST}/${rawImage?.url}`;
      return { name, slug, image, documentId, isHighlightedCategory };
    });
  });
}

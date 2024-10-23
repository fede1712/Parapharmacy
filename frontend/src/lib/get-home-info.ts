import { query } from "./strapi";
const { STRAPI_HOST } = process.env;

export async function getHomeInfo(locale: string = "es") {
  return query(`home-page?populate[headBanner][fields][0]=url&locale=${locale}`).then((res) => {
    const { title, headBanner } = res.data;
    const image = `${STRAPI_HOST}/${headBanner.url}`;

    return { title, image };
  });
}

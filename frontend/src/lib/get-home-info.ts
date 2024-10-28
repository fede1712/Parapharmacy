import { query } from "./strapi";
import { HeadBanner } from "./types/home.type";
const { STRAPI_HOST } = process.env;

export async function getHomeInfo() {
  return query(
    `home-page?populate[head_banner_images][populate][brand][fields][0]=slug&populate[head_banner_images][populate][image][fields][0]=url&populate[head_banner_images][populate][category][fields][0]=slug&populate[head_banner_images][fields][0]=isDisplayed`
  ).then((res) => {
    const { head_banner_images } = res.data;
    const bannerData = head_banner_images.map((banner: HeadBanner) => {
      return {
        url: `${STRAPI_HOST}/${banner?.image.url}`,
        isDisplayed: banner.isDisplayed,
        brand: banner.brand?.slug,
        category: banner.category?.slug,
      };
    });
    return { bannerData };
  });
}

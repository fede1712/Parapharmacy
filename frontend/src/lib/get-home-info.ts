import { query } from "./strapi";
import { HeadBanner } from "./types/home.type";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export async function getHomeInfo(): Promise<{
  bannerData: Array<{ url: string; isDisplayed: boolean; brand?: string; category?: string }>;
}> {
  try {
    const res = await query(
      `home-page?populate[head_banner_images][populate][brand][fields][0]=slug&populate[head_banner_images][populate][image][fields][0]=url&populate[head_banner_images][populate][category][fields][0]=slug&populate[head_banner_images][fields][0]=isDisplayed`
    );

    if (!res || !res.data || !Array.isArray(res.data.head_banner_images)) {
      console.error("Respuesta inesperada de la API:", res);
      return { bannerData: [] };
    }

    const { head_banner_images } = res.data;

    const bannerData = head_banner_images.map((banner: HeadBanner) => ({
      url: `${NEXT_PUBLIC_STRAPI_HOST}/${banner?.image?.url || ""}`,
      isDisplayed: banner.isDisplayed,
      brand: banner.brand?.slug,
      category: banner.category?.slug,
    }));

    return { bannerData };
  } catch (error) {
    console.error("Error al obtener información de inicio:", error);
    return { bannerData: [] };
  }
}

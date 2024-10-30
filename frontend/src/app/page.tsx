import { CarouselPlugin } from "@/components/carousel";
import { getHomeInfo } from "@/lib/get-home-info";

export default async function Home() {
  const { bannerData } = await getHomeInfo();

  return (
    <main>
      <div className="sm:flex sm:flex-col sm:items-center sm:justify-center">
        <CarouselPlugin bannerData={bannerData} />
      </div>
    </main>
  );
}

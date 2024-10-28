import { CarouselPlugin } from "@/components/carousel";
import { getHomeInfo } from "@/lib/get-home-info";

export default async function Home() {
  const { bannerData } = await getHomeInfo();

  return (
    <main>
      <div className="flex flex-col items-center justify-center">
        <CarouselPlugin bannerData={bannerData} />
      </div>
    </main>
  );
}

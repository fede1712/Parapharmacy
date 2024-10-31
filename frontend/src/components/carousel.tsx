"use client";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import { BannerData } from "./types/bannerData.type";

export function CarouselPlugin({ bannerData }: { bannerData: BannerData[] }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:w-9/12"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-vws h-full">
        {bannerData && bannerData.length > 0 ? (
          bannerData
            .filter((eachBannerInfo: BannerData) => eachBannerInfo.isDisplayed)
            .map((eachBanner: BannerData, index: number) => (
              <CarouselItem key={index}>
                <Link href={eachBanner.brand ? `/marcas/${eachBanner.brand}` : `/categorias/${eachBanner.category}`}>
                  <img
                    src={eachBanner.url}
                    className="h-full object-cover"
                    alt={eachBanner.brand ? eachBanner.brand : eachBanner.category}
                  />
                </Link>
              </CarouselItem>
            ))
        ) : (
          <p>No hay banners disponibles</p>
        )}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

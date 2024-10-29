"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand, ResponseBrand } from "./types/brand.type";
import { useRouter, useSearchParams } from "next/navigation";

export default function BrandsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<Brand[]>([]);
  const [inputSearchTerm, setInputSearchTerm] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const searchTermFromUrl = searchParams.get("search");

    if (searchTermFromUrl) {
      setInputSearchTerm(searchTermFromUrl);
      fetchBrands(searchTermFromUrl);
    } else {
      fetchBrands("");
    }
  }, [searchParams]);

  const fetchBrands = async (term: string) => {
    let url;

    if (term) {
      url = `brands?filters[name][$contains]=${term}&fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url&locale=es`;
    } else {
      url = `brands?fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url&locale=es`;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}`, "Cache-Control": "no-store" },
    });

    const data = await response.json();
    setData(
      data.data.map((brand: ResponseBrand) => {
        const { name, slug, image: rawImage, documentId } = brand;
        const image = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/${rawImage.url}`;
        return { name, slug, image, documentId };
      })
    );
  };

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      if (inputSearchTerm) {
        router.push(`/marcas/?search=${inputSearchTerm}`, undefined);
        fetchBrands(inputSearchTerm);
      } else {
        fetchBrands("");
        router.push("/marcas", undefined);
      }
    }, 500);
    setDebounceTimer(timer);

    return () => {
      clearTimeout(timer);
    };
  }, [inputSearchTerm, router]);

  return (
    <div className="p-6 grid grid-cols-1">
      <input
        type="text"
        placeholder="Buscar marca..."
        value={inputSearchTerm}
        onChange={(e) => setInputSearchTerm(e.target.value)}
        className="p-2 mx-12 mb-4 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-5 gap-4 mx-12">
        {data?.map((brand) => {
          return (
            <Link
              key={brand.documentId}
              href={`/marcas/${brand.slug}`}
              className="flex p-4 cursor-pointer hover:text-green-600 border rounded-lg items-center justify-between hover:bg-gray-100"
            >
              <h3 className="font-bold text-xs p-4">{brand.name}</h3>
              <img src={brand.image} alt={brand.name} className="rounded-full h-12 w-12 object-contain" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

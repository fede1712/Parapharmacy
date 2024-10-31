"use client";
import { Suspense, useState } from "react";
import { Brand, ResponseBrand } from "./types/brand.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useUpdateEffect } from "@/utils/useUpdateEffect";
import Link from "next/link";

function SearchBrands({
  fetchBrands,
  data,
  searchParams,
}: {
  fetchBrands: (term: string) => Promise<void>;
  data: Brand[];
  searchParams: URLSearchParams;
}) {
  const router = useRouter();

  const [inputSearchTerm, setInputSearchTerm] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  useUpdateEffect(() => {
    const searchTermFromUrl = searchParams.get("search");

    if (searchTermFromUrl) {
      setInputSearchTerm(searchTermFromUrl);
      fetchBrands(searchTermFromUrl);
    } else {
      fetchBrands("");
    }
  }, [searchParams]);

  useUpdateEffect(() => {
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

    return () => clearTimeout(timer);
  }, [inputSearchTerm, router]);

  return (
    <div className="grid grid-cols-1 p-6">
      <input
        type="text"
        placeholder="Buscar marca..."
        value={inputSearchTerm}
        onChange={(e) => setInputSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md shadow-md sm:mx-12 focus:outline-none focus:border-blue-500"
      />
      <div className="grid gap-2 sm:grid-cols-5 sm:gap-4 sm:mx-12">
        {data?.map((brand) => {
          return (
            <Link
              key={brand.documentId}
              href={`/marcas/${brand.slug}`}
              className="flex items-center justify-between w-full p-4 border rounded-lg cursor-pointer hover:text-green-600 hover:bg-gray-100"
            >
              <h3 className="p-4 text-xs font-bold">{brand.name}</h3>
              <img src={brand.image} alt={brand.name} className="object-contain w-12 h-12 rounded-full" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function BrandsPage() {
  const [data, setData] = useState<Brand[]>([]);

  return (
    <Suspense fallback={<p>Cargando marcas..</p>}>
      <BrandsPageContent setData={setData} data={data} />
    </Suspense>
  );
}

function BrandsPageContent({ setData, data }: { setData: (data: Brand[]) => void; data: Brand[] }) {
  const searchParams = useSearchParams();

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

  return <SearchBrands data={data} fetchBrands={fetchBrands} searchParams={searchParams} />;
}

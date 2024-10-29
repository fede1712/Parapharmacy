"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brand } from "./types/brand.type";

export default function BrandsPage() {
  const [data, setData] = useState<Brand[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let url;

    if (searchTerm) {
      url = `brands?filters[name][$contains]=${searchTerm}&fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url&locale=es`;
    } else {
      url = `brands?fields[0]=name&fields[1]=description&fields[2]=slug&populate[image][fields][0]=url&locale=es`;
    }
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}`, "Cache-Control": "no-store" },
    })
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.data.map(
            (brand: {
              documentId: string;
              id: 12;
              image: { id: 42; documentId: string; url: string };
              name: string;
              slug: string;
            }) => {
              const { name, slug, image: rawImage, documentId } = brand;
              const image = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/${rawImage.url}`;
              return { name, slug, image, documentId };
            }
          )
        )
      );
  }, [searchTerm]);

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Buscar marca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md shadow-md focus:outline-none focus:border-blue-500"
      />
      <div className="grid grid-cols-5 gap-4 mx-12">
        {data?.map((brand) => {
          console.log(brand);

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

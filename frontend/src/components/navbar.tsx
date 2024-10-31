"use client";
import { MenuList } from "./menu-list";
import { Categories, Products, ProductsResponse } from "./types/categories.type";
import Link from "next/link";
import { ItmesMenuMobile } from "./menu-mobile";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useUpdateEffect } from "@/utils/useUpdateEffect";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export const Navbar = ({ categories }: { categories: Categories[] }) => {
  const router = useRouter();
  const [data, setData] = useState<Products[]>([]);
  const [inputSearchProductsTerm, setInputSearchProductsTerm] = useState("");
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchProducts = async (term: string) => {
    try {
      if (!term) return;
      let url;

      if (term) {
        setIsPopoverOpen(true);
        url = `products?filters[name][$contains]=${term}&fields[0]=name&fields[1]=description&fields[2]=price&fields[3]=stock&fields[4]=quantity&fields[5]=discount&fields[6]=slug&populate[brand][fields][0]=name&populate[category][fields][0]=name&populate[images][fields][0]=url`;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
        headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}`, "Cache-Control": "no-store" },
      });

      const responsedData = await response.json();
      if (term) {
        setData(
          responsedData.data.map((product: ProductsResponse) => {
            const { name, slug, images: rawImage, documentId } = product;
            const image = `${process.env.NEXT_PUBLIC_STRAPI_HOST}/${rawImage[0].url}`;
            return { name, slug, image, documentId };
          })
        );
        handleFocus();
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useUpdateEffect(() => {
    if (debounceTimer) clearTimeout(debounceTimer);

    const timer = setTimeout(() => {
      if (inputSearchProductsTerm) {
        fetchProducts(inputSearchProductsTerm);
      }
    }, 500);
    setDebounceTimer(timer);

    return () => clearTimeout(timer);
  }, [inputSearchProductsTerm, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputSearchProductsTerm(value);
  };

  const handleFocus = () => inputRef.current?.focus();

  const handleProdcutClick = () => {
    setInputSearchProductsTerm("");
    setIsPopoverOpen(false);
    setData([]);
  };

  return (
    <nav className="py-2 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl lg:max-w-full">
      <div className="sm:flex items-center justify-between gap-2 mx-auto sm:max-w-4xl md:max-w-6xl lg:max-w-full">
        <div className="flex justify-between">
          <Link href="/" className="flex items-center ">
            <div className="flex justify-end ml-4 sm:hidden">
              <ItmesMenuMobile categories={categories} />
            </div>
            <img src="/shop_logo.png" alt="Logo Parafarmacia La Cúpula" className="h-14 sm:h-20 " />
            <h2 className="text-xl text-gray-900 cursor-pointer sm:text-1xl hover:text-gray-400">
              Parafarmacia <span className="font-bold">La Cúpula</span>
            </h2>
          </Link>
        </div>

        <div className="px-2 mt-4 flex justify-center sm:mt-0 sm:w-6/12">
          <Popover open={data.length > 0 && isPopoverOpen} onOpenChange={handleFocus}>
            <PopoverTrigger asChild className="h-full ">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Busca en nuestro catálogo..."
                value={inputSearchProductsTerm}
                onChange={handleSearchChange}
                onFocus={handleFocus}
                className="rounded-md mx-2 w-11/12 focus:outline-none sm:p-2 sm:w-full"
              />
            </PopoverTrigger>
            <PopoverContent className="flex justify-center w-full">
              <ul className="max-h-96 overflow-y-auto">
                {data && data.length > 0 ? (
                  data.map((result, index) => (
                    <Link href={`/productos/${result.slug}`} key={index} onClick={handleProdcutClick}>
                      <li
                        key={index}
                        className="px-4 py-2 gap-1 hover:bg-gray-200 rounded cursor-pointer flex justify-start items-center"
                      >
                        <img src={result.image} alt={result.name} className="rounded-full h-12 w-12 object-contain" />
                        <p className="text-sm font-medium">{result.name}</p>
                      </li>
                      <Separator />
                    </Link>
                  ))
                ) : (
                  <p>No hay productos disponibles</p>
                )}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7 mr-4">
          <Link href="/carrito" className="hover:bg-gray-100 p-2 rounded-sm hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <p className="text-black hidden sm:flex">Mi cesta</p>
          </Link>
          <Link
            href="/mi-cuenta"
            className="hover:bg-gray-100 p-2 rounded-sm hidden sm:flex itmems-center justify-between"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <p className="text-black hidden sm:flex">Mi cuenta</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 sm:gap-7">
        <div className="items-center justify-between hidden sm:flex">
          <MenuList categories={categories} />
        </div>
      </div>
    </nav>
  );
};

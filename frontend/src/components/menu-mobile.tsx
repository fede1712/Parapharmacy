"use client";

import Link from "next/link";
import { Categories } from "./types/categories.type";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { getCorrectIconCategory } from "./utils/getCorrectIconCategory";
import { useState } from "react";

export const ItmesMenuMobile = ({ categories }: { categories: Categories[] }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => setIsPopoverOpen((prev) => !prev);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 "
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </PopoverTrigger>
      <PopoverContent className="h-full overflow-y-auto">
        <Link href="/carrito" className="flex border-b items-center text-md gap-2" onClick={togglePopover}>
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
          <p className="text-black sm:flex">Mi cesta</p>
        </Link>
        <Link
          href="/mi-cuenta"
          className="flex border-b border-t items-center text-md py-2 gap-2"
          onClick={togglePopover}
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
          <p className="text-black sm:flex">Mi cuenta</p>
        </Link>
        {categories
          .sort((a, b) => a.order - b.order)
          .map((category) => (
            <Link
              onClick={togglePopover}
              key={category.documentId}
              href={`/categorias/${category.slug}`}
              className={`flex border-b border-t items-center text-md py-2 gap-2 ${
                category.slug === "promociones" ? "text-red-600 font-semibold" : ""
              }`}
            >
              {getCorrectIconCategory(category.slug)}
              {category.name}
            </Link>
          ))}
        <Link href={`/marcas`} className="flex justify-between items-center gap-2 text-md" onClick={togglePopover}>
          Nuestras marcas
        </Link>
      </PopoverContent>
    </Popover>
  );
};

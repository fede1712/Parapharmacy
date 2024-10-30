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
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </PopoverTrigger>
      <PopoverContent>
        <Link href={`/marcas`} className="flex justify-between items-center gap-2 text-2xl" onClick={togglePopover}>
          Nuestras marcas
        </Link>
        {categories
          .sort((a, b) => a.order - b.order)
          .map((category) => (
            <Link
              onClick={togglePopover}
              key={category.documentId}
              href={`/categorias/${category.slug}`}
              className={`flex border-b border-t items-center text-2xl py-2 gap-2 ${
                category.slug === "promociones" ? "text-red-600 font-semibold" : ""
              }`}
            >
              {category.name}
              {getCorrectIconCategory(category.slug)}
            </Link>
          ))}
      </PopoverContent>
    </Popover>
  );
};

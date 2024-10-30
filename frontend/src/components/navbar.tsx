"use client";
import { MenuList } from "./menu-list";
import { Categories } from "./types/categories.type";
import Link from "next/link";
import { ItmesMenuMobile } from "./menu-mobile";

export const Navbar = ({ categories }: { categories: Categories[] }) => {
  return (
    <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl lg:max-w-full">
      <Link href="/">
        <img src="/shop_logo.png" alt="Logo Parafarmacia La Cúpula" className="h-20" />
      </Link>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList categories={categories} />
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <Link href="/carrito" className="hover:bg-gray-100 p-2  rounded-sm hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
        <Link href="/mi-cuenta" className="hover:bg-gray-100 p-2 rounded-sm hidden sm:flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <p className="text-black hidden sm:flex">Mi cuenta</p>
        </Link>
      </div>
      <div className="flex mr-4 sm:hidden">
        <ItmesMenuMobile categories={categories} />
      </div>
    </nav>
  );
};

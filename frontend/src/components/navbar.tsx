"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { MenuList } from "./menu-list";
import { Categories } from "./types/categories.type";
import Link from "next/link";

export const Navbar = ({ categories }: { categories: Categories[] }) => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl lg:max-w-full">
      <Link href="/">
        <img src="/shop_logo.png" alt="Logo Parafarmacia La Cúpula" className="h-20" />
      </Link>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList categories={categories} />
      </div>

      <div className="flex sm:hidden">
        <p>Menu mobile</p>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <Button onClick={() => router.push("/carrito")} className="bg-white hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
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
          <p className="text-black">Mi cesta</p>
        </Button>
        <Button onClick={() => router.push("/user")} className="bg-white hover:bg-gray-100">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <p className="text-black">Mi cuenta</p>
        </Button>
      </div>
    </nav>
  );
};

"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Categories } from "./types/categories.type";
import { getCorrectIconCategory } from "./utils/getCorrectIconCategory";

export const MenuList = ({ categories }: { categories: Categories[] }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="p-2 rounded  justify-between items-center hover:bg-accent ">
          <Link href={`/marcas`} className="flex justify-between items-center gap-2">
            Nuestras marcas
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/categorias">
            <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px ">
              {categories && categories.length > 0 ? (
                categories.map((category) => (
                  <ListItem
                    key={category.documentId}
                    title={category.name}
                    href={`/categorias/${category.slug}`}
                    className={`flex justify-between items-center ${
                      category.slug === "promociones" ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    {getCorrectIconCategory(category.slug)}
                  </ListItem>
                ))
              ) : (
                <p>No hay categorías disponibles</p>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {categories && categories.length > 0 ? (
          categories
            .filter((category) => category.isHighlightedCategory)
            .sort((a, b) => a.order - b.order)
            .map((category) => (
              <NavigationMenuItem
                key={category.documentId}
                className="p-2 rounded  justify-between items-center hover:bg-accent "
              >
                <Link
                  href={`/categorias/${category.slug}`}
                  className={`flex justify-between items-center gap-2  ${
                    category.slug === "promociones" ? "text-red-600 font-semibold" : ""
                  }`}
                >
                  {category.name} {getCorrectIconCategory(category.slug)}
                </Link>
              </NavigationMenuItem>
            ))
        ) : (
          <p>No hay categorías disponibles</p>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

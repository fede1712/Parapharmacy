import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
  { id: 1, name: "Sobre nosotros", href: "#" },
  { id: 2, name: "Nuestras marcas", href: "/marcas" },
  { id: 3, name: "Nuestros productos", href: "#" },
  { id: 4, name: "Nuestras categorias", href: "/categorias" },
];

export const Footer = () => {
  return (
    <footer className="mt-4 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5 items-center">
            <img src="/shop_logo_removebg.png" alt="Logo Parafarmacia La Cúpula" className="h-20" />
            <h2 className="text-2xl text-gray-900 sm:text-1xl">
              Parafarmacia <span className="font-bold">La Cúpula</span>
            </h2>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              {dataFooter.map((elm) => (
                <Link key={elm.id} href={elm.href} className="mr-3 hover:text-gray-900">
                  {elm.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-center">
          © 2024. Parafamacia La Cúpula.Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

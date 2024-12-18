import Link from "next/link";
import { getCategories } from "@/lib/get-categories";
import { Category } from "@/types/pages-types";

export default async function CategoryPage() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 mx-4 justify-center items-center md:mx-16 md:gap-10 md:grid-cols-6">
        {categories && categories.length > 0 ? (
          categories.map((category: Category) => (
            <Link
              key={category.documentId}
              href={`/categorias/${category.slug}`}
              className="flex flex-col items-center justify-center p-4 cursor-pointer hover:text-green-600 "
            >
              <img src={category.image} alt={category.name} className="rounded-full h-24 w-24 border-2" />
              <h3 className="font-bold text-sm p-4 text-center ">{category.name}</h3>
            </Link>
          ))
        ) : (
          <p>No hay categorias disponibles</p>
        )}
      </div>
    </div>
  );
}

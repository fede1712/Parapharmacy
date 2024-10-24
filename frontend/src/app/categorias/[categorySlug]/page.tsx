export default async function CategoryPage({ params }: { params: { categorySlug: string } }) {
  return <h2 className="font-bold text-4xl p-4">{params.categorySlug}</h2>;
}

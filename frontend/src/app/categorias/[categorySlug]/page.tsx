export default async function CategoryDetailsPage({ params }: { params: { categorySlug: string } }) {
  const safeCategorySlug = encodeURIComponent(params.categorySlug);

  return <h2 className="font-bold text-4xl p-4">{safeCategorySlug}</h2>;
}

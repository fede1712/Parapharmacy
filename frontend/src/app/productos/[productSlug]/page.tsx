export default async function ProductDetailsPage({ params }: { params: { productSlug: string } }) {
  const safeProductSlug = encodeURIComponent(params.productSlug);
  return <h2 className="font-bold text-4xl p-4">{safeProductSlug}</h2>;
}

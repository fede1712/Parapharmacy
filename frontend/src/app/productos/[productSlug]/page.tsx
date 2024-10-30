export default async function ProductDetailsPage({ params }: { params: { productSlug: string } }) {
  return <h2 className="font-bold text-4xl p-4">{params.productSlug}</h2>;
}

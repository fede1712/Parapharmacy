export default async function BrandDetailsPage({ params }: { params: { brandSlug: string } }) {
  const safeBrandSlug = encodeURIComponent(params.brandSlug);

  return <h2 className="font-bold text-4xl p-4">{safeBrandSlug}</h2>;
}

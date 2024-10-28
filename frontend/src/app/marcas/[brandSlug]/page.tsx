export default async function BrandDetailsPage({ params }: { params: { brandSlug: string } }) {
  return <h2 className="font-bold text-4xl p-4">{params.brandSlug}</h2>;
}

import PropertyDetailsClient from "app/components/PropertyDetailsClient";
import { categoriesData } from "constant/constant";
import { AllCategoriesData } from "interfaces/categories";
import { notFound } from "next/navigation";



type CategoryKey = keyof typeof categoriesData;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: CategoryKey }>;
}) {
  const { slug } = await params;
  // Важливо: categoriesData має бути типізований як AllCategoriesData
  // для коректної роботи з TypeScript
  const category = (categoriesData as AllCategoriesData)[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
      <p className="text-lg text-gray-700">{category.description}</p>
      <PropertyDetailsClient categoryData={category} />
    </div>
  );
}

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
  const category = (categoriesData as AllCategoriesData)[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 data-aos="fade-right" className="text-3xl font-bold mb-4 text-center md:text-left">{category.title}</h1>
      <p  data-aos="fade-right" className="text-lg text-gray-700 text-center md:text-left">{category.description}</p>
      <PropertyDetailsClient categoryData={category} />
    </div>
  );
}

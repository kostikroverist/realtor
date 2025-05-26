import { notFound } from "next/navigation";

const categoriesData = {
  buy: { title: "Купити", description: "Список товарів для покупки" },
  rent: { title: "Оренда", description: "Список об'єктів в оренду" },
  land: { title: "Земельні ділянки", description: "Список ділянок" },
  houses: { title: "Будинки", description: "Список будинків" },
  flats: { title: "Квартири", description: "Список квартир" },
};

type CategoryKey = keyof typeof categoriesData;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: CategoryKey }>;
}) {
  const { slug } = await params;
  const category = categoriesData[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{category.title}</h1>
      <p className="text-lg text-gray-700">{category.description}</p>
    </div>
  );
}

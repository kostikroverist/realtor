import PropertyDetailsClient from "app/components/PropertyDetailsClient";
import { AllCategoriesData } from "interfaces/categories";
import { notFound } from "next/navigation";

const categoriesData = {
  buy: {
    title: "Купити",
    description: "Список товарів для покупки",
    property: 14423,
    propertyId: 0,
  },
  rent: {
    title: "Комерція",
    description: "Список об'єктів в оренду",
    property: 14440,
    propertyId: 0,
  },
  land: {
    title: "Земельні ділянки",
    description: "Список ділянок",
    property: 14431,
    propertyId: 0,
  },
  houses: {
    title: "Будинки",
    description: "Список будинків",
    property: 14423,
    propertyId: 0,
  },
  flats: {
    title: "Квартири",
    description: "Список квартир за типом",
    // Замість одного property, тепер масив підкатегорій
    subCategories: [
      { title: "1-кімнатні", property: 14429, propertyId: 0, slug: "1-room" },
      { title: "2-кімнатні", property: 14427, propertyId: 0, slug: "2-room" },
      { title: "3-кімнатні", property: 14425, propertyId: 0, slug: "3-room" },
    ],
    // Можна залишити propertyId за замовчуванням, якщо він однаковий для всіх,
    // або визначити його для кожної підкатегорії, якщо різний.
    // Наразі він є в кожній підкатегорії.
  },
};

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

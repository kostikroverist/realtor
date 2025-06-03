import { AllCategoriesData } from "interfaces/categories";

export const categoriesData: AllCategoriesData = {
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
    subCategories: [
      { title: "1-кімнатні", property: 14429, propertyId: 0, slug: "1-room" },
      { title: "2-кімнатні", property: 14427, propertyId: 0, slug: "2-room" },
      { title: "3-кімнатні", property: 14425, propertyId: 0, slug: "3-room" },
    ],
  },
};


// /components/Property/PropertyDetailsClient.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useProperty } from "../../hooks/useProperty"; // Переконайся, що шлях правильний
import PropertyView from "./property/PropertyView"; // Переконайся, що шлях правильний
import { CategoryConfig, SubCategoryConfig } from "interfaces/categories";

interface Props {
  categoryData: CategoryConfig; 
}

const PropertyDetailsClient: React.FC<Props> = ({ categoryData }) => {
  const [activeEndpoint, setActiveEndpoint] = useState<{
    property: number;
    propertyId: number;
  } | null>(null);

  useEffect(() => {
    if (categoryData.subCategories && categoryData.subCategories.length > 0) {
      setActiveEndpoint({
        property: categoryData.subCategories[0].property,
        propertyId: categoryData.subCategories[0].propertyId,
      });
    } else if (
      categoryData.property !== undefined &&
      categoryData.propertyId !== undefined
    ) {
      setActiveEndpoint({
        property: categoryData.property,
        propertyId: categoryData.propertyId,
      });
    } else {
      setActiveEndpoint(null);
      console.error("Недостатньо даних для визначення ендпоінту", categoryData);
    }
  }, [categoryData]);

  const {
    data: allProperties,
    isLoading,
    error,
  } = useProperty(
    activeEndpoint ? activeEndpoint.property : 0,
    activeEndpoint ? activeEndpoint.propertyId : 0
  );

  // Обробка кнопки для зміни активного ендпоінту
  const handleSubCategorySelect = (subCategory: SubCategoryConfig) => {
    setActiveEndpoint({
      property: subCategory.property,
      propertyId: subCategory.propertyId,
    });
  };

  if (
    !activeEndpoint &&
    !categoryData.subCategories &&
    !categoryData.property
  ) {
    return (
      <div className="text-center py-10 text-orange-500">
        Конфігурація категорії неповна.
      </div>
    );
  }

  if (isLoading)
    return <div className="text-center py-10">Завантаження...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Помилка: {(error as Error).message}
      </div>
    );

  if (
    !allProperties ||
    !Array.isArray(allProperties) ||
    allProperties.length === 0
  ) {
    if (categoryData.subCategories && activeEndpoint) {
      const currentSubCategory = categoryData.subCategories.find(
        (sc) => sc.property === activeEndpoint.property
      );
      return (
        <div className="container mx-auto px-4 py-8">
          {/* Кнопки для вибору підкатегорії */}
          {categoryData.subCategories &&
            categoryData.subCategories.length > 0 && (
              <div className="mb-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                {categoryData.subCategories.map((subCat) => (
                  <button
                    key={subCat.slug}
                    onClick={() => handleSubCategorySelect(subCat)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${
                      activeEndpoint &&
                      activeEndpoint.property === subCat.property
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {subCat.title}
                  </button>
                ))}
              </div>
            )}
          <div className="text-center py-10">
            Дані для {currentSubCategory?.title || "вибраної категорії"} не
            знайдено або вони порожні.
          </div>
        </div>
      );
    }
    return (
      <div className="text-center py-10">
        Дані не знайдено або вони порожні.
      </div>
    );
  }

  const filteredProperties = allProperties.filter((property) => {
    return property.uinfo ;
  });

  if (filteredProperties.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        {categoryData.subCategories &&
          categoryData.subCategories.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2 sm:justify-start">
              {categoryData.subCategories.map((subCat) => (
                <button
                  key={subCat.slug}
                  onClick={() => handleSubCategorySelect(subCat)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    activeEndpoint &&
                    activeEndpoint.property === subCat.property
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {subCat.title}
                </button>
              ))}
            </div>
          )}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Деталі об&apos;єктів
        </h2>
        <div className="text-center py-10 bg-gray-50 rounded-lg shadow">
          Не знайдено об&apos;єктів, що відповідають вашому фільтру (Агент:
          Віталій Деяк).
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {categoryData.subCategories && categoryData.subCategories.length > 0 && (
        <div className="mb-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          {categoryData.subCategories.map((subCat) => (
            <button
              key={subCat.slug}
              onClick={() => handleSubCategorySelect(subCat)}
              className={`px-5 py-2.5 rounded-lg text-base font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  activeEndpoint && activeEndpoint.property === subCat.property
                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                    : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 focus:ring-indigo-500"
                }`}
            >
              {subCat.title}
            </button>
          ))}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Деталі об&apos;єктів (Агент: Віталій Деяк
        {categoryData.subCategories &&
          activeEndpoint &&
          `, Тип: ${
            categoryData.subCategories.find(
              (sc) => sc.property === activeEndpoint.property
            )?.title || ""
          }`}
        )
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredProperties.map((item) => (
          <PropertyView key={item.id || item.oid} property={item} />
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsClient;

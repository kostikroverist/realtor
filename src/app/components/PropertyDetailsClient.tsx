// /components/Property/PropertyDetailsClient.tsx
'use client';
import React from 'react';
import { useProperty } from '../../hooks/useProperty';
import PropertyView from './property/PropertyView';

const PropertyDetailsClient = () => {
  const propertyId = 14423;
  const someId = 0;

  const { data: allProperties, isLoading, error } = useProperty(propertyId, someId);

  if (isLoading) return <div className="text-center py-10">Завантаження...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Помилка: {(error as Error).message}</div>;

  if (!allProperties || !Array.isArray(allProperties) || allProperties.length === 0) {
    return <div className="text-center py-10">Дані не знайдено або вони порожні.</div>;
  }

  const filteredProperties = allProperties.filter(property => {
    return property.uinfo && property.uinfo.name === "Віталій Деяк";
  });

  if (filteredProperties.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Деталі об&apos;єктів
        </h2>
        <div className="text-center py-10 bg-gray-50 rounded-lg shadow">
            Не знайдено об&apos;єктів, що відповідають вашому фільтру (Агент: Віталій Деяк).
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Деталі об&apos;єктів (Агент: Віталій Деяк)
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
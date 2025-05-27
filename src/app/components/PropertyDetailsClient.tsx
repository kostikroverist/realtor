// /components/Property/PropertyDetailsClient.tsx
'use client';
import React from 'react';
import { useProperty } from '../../hooks/useProperty';
import PropertyView from './property/PropertyView';


const PropertyDetailsClient = () => {
  
  const propertyId = 14423; // Або інше значення, що вказує на отримання списку
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
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mt-8 mb-4">Деталі об&apos;єктів</h2>
        <div className="text-center py-10">Не знайдено об&apos;єктів, що відповідають вашому фільтру (Агент: Віталій Деяк).</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mt-8 mb-4">Деталі об&apos;єктів (Агент: Віталій Деяк)</h2>
      {filteredProperties.map((item) => (
        <div key={item.id || item.oid} className="mb-8 p-4 border rounded-lg shadow-sm">
          <PropertyView property={item} />
        </div>
      ))}
    </div>
  );
};

export default PropertyDetailsClient;
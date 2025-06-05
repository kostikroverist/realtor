'use client'; 
import React from 'react';
import { useParams } from 'next/navigation'; // Для отримання параметрів маршруту
import PropertyFullDetailsView from 'app/components/property/PropertyFullDetailsView';
import { usePropertyByOid } from 'hooks/useProperty';

const PropertyDetailPage = () => {
  const params = useParams();
  const oid = typeof params.oid === 'string' ? params.oid : undefined; 

  const { data: property, isLoading, error, isError } = usePropertyByOid(oid);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Завантаження деталей об&apos;єкта...</div>
        {/* Тут можна додати спіннер або скелетон */}
      </div>
    );
  }

  if (isError || !property) {
    return (
      <div  className="flex flex-col justify-center items-center min-h-screen text-center px-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Помилка завантаження даних</h2>
        <p className="text-gray-700">
          На жаль, не вдалося завантажити інформацію про об&apos;єкт.
          {error && <span className="block mt-2">Деталі помилки: {error.message}</span>}
        </p>
        <p className="mt-4">Спробуйте оновити сторінку або поверніться пізніше.</p>
        {/* Можна додати кнопку "На Головну" або "Назад" */}
      </div>
    );
  }

  return (
    <main data-aos="fade-right" className="bg-gray-100 py-6 sm:py-12"> {/* Фон для сторінки */}
      <PropertyFullDetailsView property={property} />
    </main>
  );
};

export default PropertyDetailPage;
// /components/Property/PropertyView.tsx
'use client';
import React from 'react';
import PropertyDetailItem from './PropertyDetailItem'; // Якщо використовуєш
import { PropertyData } from 'interfaces/property';

interface PropertyViewProps {
  property: PropertyData;
}

const PropertyView: React.FC<PropertyViewProps> = ({ property }) => {
  // Тут ти вибираєш, які саме дані показувати
    console.log(property)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{property.title || 'Назва об\'єкта не вказана'}</h1>

      {property.SmallPhoto && (
        <img
          src={`https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto}`} // Припускаючи базовий URL для фото
          alt={property.title || 'Фото об\'єкта'}
          className="max-w-md w-full h-auto rounded-lg shadow-md mb-4"
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PropertyDetailItem label="Ціна" value={property.price} currency={property.currency} />
        <PropertyDetailItem label="Адреса" value={property.adres} />
        <PropertyDetailItem label="Тип" value={property.apartment_type_name} />
        <PropertyDetailItem label="Загальна площа" value={property.tsquare} currency="кв.м." />
        <PropertyDetailItem label="Кількість кімнат" value={property.roomscount} />
        <PropertyDetailItem label="Поверховість" value={property.floorcount} />
      </div>

      {property.plain_description && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Опис:</h3>
          <p className="text-gray-700 whitespace-pre-wrap">{property.plain_description}</p>
        </div>
      )}

      {property.uinfo && (
        <div className="mt-6 p-4 border rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Контактна особа:</h3>
          {property.uinfo.photo && (
            <img
                src={property.uinfo.photo}
                alt={property.uinfo.name || 'Фото агента'}
                className="w-20 h-20 rounded-full mb-2 object-cover"
            />
          )}
          <PropertyDetailItem label="Ім'я" value={property.uinfo.name} />
          <PropertyDetailItem label="Телефон" value={property.uinfo.mobphone} />
          {/* Додай інші поля з uinfo, якщо потрібно */}
        </div>
      )}

      {/* Додай інші потрібні поля тут */}
      {/*
        Наприклад:
        <PropertyDetailItem label="ID Об'єкта" value={property.oid} />
        <PropertyDetailItem label="Дата оновлення" value={property.dateupdated} />
      */}
    </div>
  );
};

export default PropertyView;
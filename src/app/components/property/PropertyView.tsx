"use client";
import React from "react";
import Link from "next/link"; 
import PropertyDetailItem from "./PropertyDetailItem";
import { PropertyData } from "interfaces/property";
interface PropertyViewProps {
  property: PropertyData;
}

const PropertyView: React.FC<PropertyViewProps> = ({ property }) => {
  const propertyUrl = `/property/${property.oid}`;

  return (
    <Link
      href={propertyUrl}
      className="block h-full group cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-250 ease-in-out overflow-hidden flex flex-col h-full cursor-pointer">
        {property.SmallPhoto && (
          <div className="w-full h-40 sm:h-44 md:h-48 overflow-hidden">
            {" "}
            <img
              src={`https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto}`}
              alt={property.title || "Фото об'єкта"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
          {" "}
          <div>
            <h3
              className="text-base sm:text-lg font-semibold text-gray-800 mb-1 "
              title={property.title || ""}
            >
              {property.title || "Назва об'єкта не вказана"}
            </h3>

            <div className="mt-1 mb-2">
              <span className="text-xl sm:text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                {typeof property.price === "number"
                  ? property.price.toLocaleString("uk-UA")
                  : property.price}
                {property.currency && (
                  <span className="text-lg sm:text-xl ml-1 align-baseline">
                    {property.currency}
                  </span>
                )}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 mb-2 text-xs">
              {" "}
              <PropertyDetailItem
                label="Адреса"
                value={property.adres ? property.adres.split(",")[0] : ""}
              />{" "}
              <PropertyDetailItem
                label="Тип"
                value={property.apartment_type_name}
              />
              <PropertyDetailItem
                label="Площа"
                value={property.tsquare}
                currency="кв.м."
              />
              <PropertyDetailItem label="Кімнат" value={property.roomscount} />
            </div>

            {property.plain_description && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-600 whitespace-pre-wrap line-clamp-2 sm:line-clamp-3">
                  {property.plain_description}
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="shadow-md text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
        hover:bg-gradient-to-br font-medium rounded-b-lg text-sm px-5 py-2.5 text-center w-full"
        >
          Деталі
        </div>
      </div>
    </Link>
  );
};

export default PropertyView;

// {property.uinfo && (
//   <div className="mt-3 pt-2 border-t border-gray-100">
//     {/* <h4 className="text-xs font-medium text-gray-500 mb-1">Контакт:</h4> */}
//     <div className="flex items-center">
//       {property.uinfo.photo && (
//         <img
//           src={property.uinfo.photo}
//           alt={property.uinfo.name || ''}
//           className="w-8 h-8 rounded-full object-cover mr-2" /* Зменшене фото агента */
//         />
//       )}
//       <div className="text-xs">
//         <p className="text-gray-700 font-medium leading-tight">{property.uinfo.name}</p>
//         <p className="text-gray-500 leading-tight">{property.uinfo.mobphone}</p>
//       </div>
//     </div>
//   </div>
// )}

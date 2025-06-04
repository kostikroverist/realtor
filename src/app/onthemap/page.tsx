"use client";

import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import SubCategorySelector from "app/components/categoryComponent/SubCategorySelector";
import { categoriesData } from "constant/constant"; // Ваш файл з categoriesData
import { useProperty } from "hooks/useProperty"; // Ваш хук
import type { PropertyData } from "interfaces/property"; // Ваш тип
import type { AllCategoriesData } from "interfaces/categories"; // Потрібно додати/оновити типи

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

// Припустимо, ваші типи виглядають приблизно так (адаптуйте за потребою)
// в interfaces/categories.ts
/*
export interface BaseCategoryData {
  title: string;
  description: string;
  property: number;
  propertyId: number;
}

export interface SubCategory extends BaseCategoryData {
  slug: string;
}

export interface Category extends BaseCategoryData {
  subCategories?: SubCategory[];
}

export interface AllCategoriesData {
  [key: string]: Category;
}
*/

const Page = () => {
  const getDefaultSlug = () => {
    const flatsCategory = categoriesData.flats;
    if (
      flatsCategory &&
      flatsCategory.subCategories &&
      flatsCategory.subCategories.length > 0
    ) {
      return flatsCategory.subCategories[0].slug; // Наприклад, "1-room"
    }
    const firstCategoryKey = Object.keys(categoriesData)[0];
    return firstCategoryKey || null;
  };

  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    getDefaultSlug()
  );
  const [properties, setProperty] = useState<PropertyData[] | null>(null);
  const [customIcon, setCustomIcon] = useState<
    import("leaflet").DivIcon | null
  >(null);

  const activeItemData = useMemo(() => {
    if (!selectedSlug) return null;

    for (const key in categoriesData) {
      const category = categoriesData[key as keyof AllCategoriesData];
      if (key === selectedSlug) {
        return category;
      }
      // Перевіряємо підкатегорії
      if (category.subCategories) {
        const subCategory = category.subCategories.find(
          (sub) => sub.slug === selectedSlug
        );
        if (subCategory) {
          return subCategory;
        }
      }
    }
    return null;
  }, [selectedSlug]);

  const { data: fetchedData } = useProperty(
    activeItemData?.property || 0,
    activeItemData?.propertyId || 0
  );

  useEffect(() => {
    if (fetchedData) {
      setProperty([fetchedData]);
    } else {
      setProperty(null);
    }
  }, [fetchedData]);

  useEffect(() => {
    const loadIcon = async () => {
      const L = await import("leaflet");
      const icon = L.divIcon({
        className: "",
        html: `
          <div style="font-size: 24px; color: #007BFF;"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" width="24" height="24">
              <path d="M192 0C86 0 0 86 0 192c0 77.41 27.65 99.42 172.18 310.8a24 24 0 0 0 39.64 0C356.35 291.42 384 269.41 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/>
            </svg>
          </div>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });
      setCustomIcon(icon);
    };

    if (typeof window !== "undefined") {
      loadIcon();
    }
  }, []);

  const handleSelect = (property: number, propertyId: number, slug: string) => {
    setSelectedSlug(slug);
  };

  const flatProperties: PropertyData[] = useMemo(() => {
    if (!properties) return [];
    if (Array.isArray(properties[0])) {
      return properties[0] as PropertyData[];
    }
    if (
      properties.length > 0 &&
      typeof properties[0] === "object" &&
      properties[0] !== null &&
      "lat" in properties[0]
    ) {
      return properties as PropertyData[];
    }
    return [];
  }, [properties]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 shadow-md">
        {Object.entries(categoriesData).map(([key, category]) => (
          <div key={key}>
            {category.subCategories ? (
              <SubCategorySelector
                subCategories={category.subCategories}
                onSelect={handleSelect}
                selectedSlug={selectedSlug || undefined}
              />
            ) : (
              <button
                onClick={() =>
                  handleSelect(category.property, category.propertyId, key)
                }
                className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                  selectedSlug === key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Мапа */}
      <div className="flex-grow">
        {typeof window !== "undefined" && customIcon && (
          <MapContainer
            center={[49.262131, 23.85642]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {flatProperties.map((item, index) => {
              if (
                !item ||
                typeof item.lat === "undefined" ||
                typeof item.lng === "undefined"
              ) {
                console.warn("Invalid property item:", item);
                return null;
              }

              const lat = parseFloat(item.lat);
              const lng = parseFloat(item.lng);

              if (isNaN(lat) || isNaN(lng)) {
                console.warn("Invalid lat/lng for item:", item);
                return null;
              }

              return (
                <Marker
                  key={`${item.oid}-${index}`}
                  position={[lat, lng]}
                  icon={customIcon}
                >
                  <Popup className="cursor-pointer">
                    <a
                      href={`/property/${item.oid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm no-underline"
                    >
                      {item.adres && (
                        <p className="font-bold mb-1">{item.adres}</p>
                      )}
                      {item.SmallPhoto && (
                        <img
                          src={`https://redlockbox.blob.core.windows.net/public/${item.SmallPhoto}`}
                          alt={item.title || "Фото об'єкта"}
                          className="w-full h-auto max-h-40 object-cover rounded-md mb-1 transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      {item.description && (
                        <p className="mb-1 text-xs text-gray-600">
                          {item.description}
                        </p>
                      )}
                      <div className="text-xl font-extrabold text-blue-600">
                        {typeof item.price === "number"
                          ? item.price.toLocaleString("uk-UA")
                          : item.price}
                        {item.currency && (
                          <span className="text-lg ml-1">{item.currency}</span>
                        )}
                        <div className="text-center text-sm text-gray-600">
                          <p>Нажми щоб перейти</p>
                        </div>
                      </div>
                    </a>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Page;

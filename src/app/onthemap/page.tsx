"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import SubCategorySelector from "app/components/categoryComponent/SubCategorySelector";
import { categoriesData } from "constant/constant";
import { useProperty } from "hooks/useProperty";
import type { PropertyData } from "interfaces/property";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <p>Loading map...</p> }
);

const customIcon = L.divIcon({
  className: "",
  html: `
    <div style="font-size: 24px; color: #000000;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 384 512" width="24" height="24">
        <path d="M192 0C86 0 0 86 0 192c0 77.41 27.65 99.42 172.18 310.8a24 24 0 0 0 39.64 0C356.35 291.42 384 269.41 384 192 384 86 298 0 192 0zm0 272a80 80 0 1 1 80-80 80 80 0 0 1-80 80z"/>
      </svg>
    </div>`,
  iconSize: [30, 42],
  iconAnchor: [15, 42],
});

const Page = () => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [properties, setProperty] = useState<PropertyData[] | null>(null);
  console.log(properties);
  const selectedCategory = selectedSlug
    ? categoriesData[selectedSlug as keyof typeof categoriesData]
    : null;

  const { data } = useProperty(
    selectedCategory?.property || 0,
    selectedCategory?.propertyId || 0
  );
  useEffect(() => {
    if (data) {
      setProperty([data]);
    }
  }, [data]);

  const handleSelect = (property: number, propertyId: number, slug: string) => {
    setSelectedSlug(slug);
  };
  const flatProperties = properties
    ? Array.isArray(properties[0])
      ? properties[0]
      : []
    : [];
  return (
    <div className="h-screen flex flex-col">
      {/* Категорії/Підкатегорії */}
      <div className="flex flex-wrap gap-2 p-2">
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
        <MapContainer
          center={[49.262131, 23.85642]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Динамічні маркери */}
          {flatProperties.length === 0 ? (
            <div>Немає доступних об&apos;єктів для відображення</div>
          ) : (
            flatProperties.map((item, index) => {
              const lat = parseFloat(item.lat);
              const lng = parseFloat(item.lng);
              if (isNaN(lat) || isNaN(lng)) return null;

              return (
                <Marker key={index} position={[lat, lng]} icon={customIcon}>
                  <Popup className="cursor-pointer">
                    <a
                      href={`/property/${item.oid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm no-underline"
                    >
                      <p className="font-bold mb-1">{item.adres}</p>
                      {item.SmallPhoto && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://redlockbox.blob.core.windows.net/public/${item.SmallPhoto}`}
                          alt={item.title || "Фото об'єкта"}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                      {item.description && (
                        <p className="mb-1">{item.description}</p>
                      )}
                      <div className="text-2xl sm:text-2xl font-extrabold text-blue-600">
                        {typeof item.price === "number"
                          ? item.price.toLocaleString("uk-UA")
                          : item.price}
                        {item.currency && (
                          <span className="text-2xl sm:text-3xl ml-1">
                            {item.currency}
                          </span>
                        )}
                      </div>
                    </a>
                  </Popup>
                </Marker>
              );
            })
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Page;

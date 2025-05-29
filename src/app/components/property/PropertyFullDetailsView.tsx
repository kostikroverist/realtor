// /components/Property/PropertyFullDetailsView.tsx
"use client";
import React from "react";
import PropertyDetailItem from "./PropertyDetailItem"; // Переконайся, що шлях правильний
import { PropertyDetailData, PropertyPhoto } from "interfaces/property"; // Переконайся, що шлях правильний

// Імпорти для Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, Thumbs } from "swiper/modules"; // Додано Thumbs

// Стилі Swiper (обов'язково імпортувати!)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs"; // Стилі для мініатюр

const PropertyFullDetailsView: React.FC<{ property: PropertyDetailData }> = ({
  property,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null); // Тип 'any' для простоти, можна уточнити тип Swiper instance

  // Фільтруємо фото, щоб уникнути помилок, якщо value відсутнє
  const validPhotos: PropertyPhoto[] =
    property.Photo?.filter((photo) => photo && photo.value) || [];

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto my-8">
      {property.SmallPhoto && (
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden mb-6 shadow">
          <img
            src={`https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto}`}
            alt={property.title || "Фото об'єкта"}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          {property.title || "Назва об'єкта не вказана"}
        </h1>
        <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
          {typeof property.price === "number"
            ? property.price.toLocaleString("uk-UA")
            : property.price}
          {property.currency && (
            <span className="text-2xl sm:text-3xl ml-1">
              {property.currency}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 mb-6">
        <PropertyDetailItem label="Адреса" value={property.adres} />
        <PropertyDetailItem label="Тип" value={property.apartment_type_name} />
        {/* Для землі використовуємо Land.SizeTotalText, для іншого - tsquare */}
        <PropertyDetailItem
          label="Площа"
          value={
            property.apartment_type_name === "Земля" &&
            property.Land?.SizeTotalText
              ? `${property.Land.SizeTotalText} ${
                  property.landsizemeasure_name || "соток"
                }`.trim()
              : property.tsquare || ""
          }
          currency={property.apartment_type_name !== "Земля" ? "кв.м." : ""}
        />
        <PropertyDetailItem
          label="Кількість кімнат"
          value={String(property.roomscount)}
        />
        <PropertyDetailItem label="Поверховість" value={property.floorcount} />
        <PropertyDetailItem label="Поверх" value={property.floor} />
        <PropertyDetailItem label="ID об'єкта" value={String(property.id)} />
        <PropertyDetailItem
          label="Дата оновлення"
          value={property.dateupdated}
        />
        <PropertyDetailItem label="Кадастровий номер" value={property.landid} />
      </div>
      {property.plain_description && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Детальний опис:
          </h2>
          <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
            {property.plain_description}
          </p>
        </div>
      )}
      {property.description &&
        property.description !== property.plain_description && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Додатково:
            </h2>
            <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">
              {property.description}
            </p>
          </div>
        )}
      {property.uinfo && (
        <div className="mt-6 pt-6 border-t border-gray-200 bg-gray-50 p-4 rounded-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Контактна інформація:
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            {property.uinfo.photo && (
              <img
                src={property.uinfo.photo}
                alt={property.uinfo.name || "Фото агента"}
                className="w-24 h-24 rounded-full object-cover mr-0 mb-4 sm:mr-6 sm:mb-0 shadow-sm"
              />
            )}
            <div className="text-sm">
              <PropertyDetailItem label="Ім'я" value={property.uinfo.name} />
              <PropertyDetailItem
                label="Телефон"
                value={property.uinfo.mobphone}
              />
              {property.uinfo.email && (
                <PropertyDetailItem
                  label="Email"
                  value={property.uinfo.email}
                />
              )}
            </div>
          </div>
        </div>
      )}
      {/* Фотогалерея */}
      {validPhotos.length > 0 ? (
        <div className="bg-gray-100">
          {" "}
          {/* Фон для секції галереї */}
          {/* Основна карусель */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={validPhotos.length > 1}
            autoplay={{
              delay: 7000, // Збільшено затримку
              disableOnInteraction: false,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }} // Зв'язок з мініатюрами
            className="w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px]" // Адаптивна висота
          >
            {validPhotos.map((photoItem) => (
              <SwiperSlide key={`main-${photoItem.id || photoItem.value}`}>
                <img
                  src={`https://redlockbox.blob.core.windows.net/public/${photoItem.value}`}
                  alt={`Фото ${property.title || "об'єкта"}`}
                  className="w-full h-full object-contain bg-black/5" // object-contain щоб бачити все фото, bg-black/5 для фону
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Карусель мініатюр (Thumbs) - відображається, якщо більше 1 фото */}
          {validPhotos.length > 1 && (
            <div className="py-3 bg-gray-200">
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={false} // Мініатюри зазвичай не зациклюють
                spaceBetween={10}
                slidesPerView={3} // Початкова кількість видимих мініатюр
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="h-20 sm:h-24 md:h-28 max-w-3xl mx-auto px-4" // Обмеження ширини для кращого вигляду
                breakpoints={{
                  // Адаптивність кількості мініатюр
                  640: { slidesPerView: 4, spaceBetween: 10 },
                  768: { slidesPerView: 5, spaceBetween: 10 },
                  1024: { slidesPerView: 6, spaceBetween: 15 },
                }}
              >
                {validPhotos.map((photoItem) => (
                  <SwiperSlide
                    key={`thumb-${photoItem.id || photoItem.value}`}
                    className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity rounded overflow-hidden border-2 border-transparent swiper-slide-thumb-active:border-indigo-500 swiper-slide-thumb-active:opacity-100"
                  >
                    <img
                      src={`https://redlockbox.blob.core.windows.net/public/${photoItem.value}`}
                      alt={`Мініатюра ${property.title || "об'єкта"}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      ) : property.SmallPhoto ? (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center">
          <img
            src={`https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto}`}
            alt={property.title || "Фото об'єкта"}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
          Фото не доступне
        </div>
      )}
    </div>
  );
};

export default PropertyFullDetailsView;

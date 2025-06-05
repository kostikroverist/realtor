// /components/Property/PropertyFullDetailsView.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react"; // Додано useState, useEffect, useMemo
import PropertyDetailItem from "./PropertyDetailItem";
import { PropertyDetailData, PropertyPhoto } from "interfaces/property";

// Імпорти для Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper"; // Тип для екземпляру Swiper
import { Navigation, Pagination, A11y, Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// Імпорти для Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Плагіни для Lightbox (виберіть потрібні)
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css"; // Стилі для мініатюр в lightbox (якщо використовуєте)

const PropertyFullDetailsView: React.FC<{ property: PropertyDetailData }> = ({
  property,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperInstance | null>(null); // Екземпляр основного Swiper для синхронізації
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Фільтруємо фото та мемоїзуємо результат
  const validPhotos: PropertyPhoto[] = useMemo(
    () => property.Photo?.filter((photo) => photo && photo.value) || [],
    [property.Photo]
  );

  // Готуємо слайди для Lightbox (мемоїзуємо)
  const lightboxSlides = useMemo(() => {
    if (validPhotos.length > 0) {
      return validPhotos.map((photo) => ({
        src: `https://redlockbox.blob.core.windows.net/public/${photo.value}`,
        alt: `Фото ${property.title || "об'єкта"}`,
        // title: `Заголовок для фото ${photo.id}` // Опціонально
      }));
    } else if (property.SmallPhoto) {
      return [
        {
          src: `https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto}`,
          alt: property.title || "Фото об'єкта",
        },
      ];
    }
    return [];
  }, [validPhotos, property.SmallPhoto, property.title]);

  // Функція для відкриття Lightbox для одного зображення (коли немає галереї)
  const openSingleImageLightbox = () => {
    if (lightboxSlides.length > 0) {
      // Переконуємось, що є що показувати
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  };

  // Синхронізація Swiper з Lightbox (коли користувач гортає в Lightbox, Swiper оновлюється)
  useEffect(() => {
    if (
      lightboxOpen &&
      mainSwiper &&
      !mainSwiper.destroyed &&
      validPhotos.length > 0
    ) {
      // Перевіряємо, чи індекс в межах допустимого для Swiper
      if (lightboxIndex >= 0 && lightboxIndex < validPhotos.length) {
        if (mainSwiper.params.loop) {
          mainSwiper.slideToLoop(lightboxIndex);
        } else {
          mainSwiper.slideTo(lightboxIndex);
        }
      }
    }
  }, [lightboxIndex, lightboxOpen, mainSwiper, validPhotos]); // Додав validPhotos в залежності

  // Визначаємо, чи показувати окреме SmallPhoto зверху
  // Показуємо, якщо немає галереї (validPhotos), але є SmallPhoto
  const showTopSmallPhoto = !validPhotos.length && property.SmallPhoto;

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 max-w-6xl mx-auto ">
      <div
        className="w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden mb-6 shadow cursor-pointer"
        onClick={openSingleImageLightbox} // Клік відкриває Lightbox
      >
        <img
          src={`https://redlockbox.blob.core.windows.net/public/${property.SmallPhoto!}`}
          alt={property.title || "Фото об'єкта"}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Інформація про об'єкт (без змін) */}
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
          <p className="text-gray-600 whitespace-pre-wrap leading-relaxed text-[18px]">
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
                value={
                  <a
                    href={`tel:${property.uinfo.mobphone}`}
                    className="hover:underline"
                  >
                    {property.uinfo.mobphone}
                  </a>
                }
              />
              {property.uinfo.email && (
                <PropertyDetailItem
                  label="Email"
                  value={
                    <a
                      href={`mailto:${property.uinfo.email}`}
                      className="hover:underline"
                    >
                      {property.uinfo.email}
                    </a>
                  }
                />
              )}
            </div>
          </div>
        </div>
      )}
      {/* Фотогалерея Swiper (якщо є validPhotos) */}
      {validPhotos.length > 0 ? (
        <div className="bg-gray-100 mt-8 pt-4 pb-1">
          {" "}
          {/* Додав відступи для секції галереї */}
          {/* Основна карусель */}
          <Swiper
            onSwiper={setMainSwiper} // Зберігаємо екземпляр основного Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            loop={validPhotos.length > 1} // Вмикаємо loop, якщо більше одного фото
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] mb-3"
          >
            {validPhotos.map((photoItem, index) => (
              <SwiperSlide
                key={`main-${photoItem.id || photoItem.value}-${index}`} // Унікальний ключ
                onClick={() => {
                  setLightboxIndex(index); // Індекс беремо з map, він відповідає lightboxSlides
                  setLightboxOpen(true);
                }}
                className="cursor-pointer bg-black/5" // Додав фон для object-contain
              >
                <img
                  src={`https://redlockbox.blob.core.windows.net/public/${photoItem.value}`}
                  alt={`Фото ${property.title || "об'єкта"} - ${index + 1}`}
                  className="w-full h-full object-contain" // object-contain для повного показу
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Карусель мініатюр (Thumbs) */}
          {validPhotos.length > 1 && (
            <div className="py-3 bg-gray-200">
              {" "}
              {/* Обгортка для мініатюр */}
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={false} // Мініатюри зазвичай не зациклюють
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="h-20 sm:h-24 md:h-28 max-w-3xl mx-auto px-4"
                breakpoints={{
                  640: { slidesPerView: 4, spaceBetween: 10 },
                  768: { slidesPerView: 5, spaceBetween: 10 },
                  1024: { slidesPerView: 6, spaceBetween: 15 },
                }}
              >
                {validPhotos.map((photoItem, index) => (
                  <SwiperSlide
                    key={`thumb-${photoItem.id || photoItem.value}-${index}`}
                    className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity rounded overflow-hidden border-2 border-transparent swiper-slide-thumb-active:border-indigo-500 swiper-slide-thumb-active:opacity-100"
                  >
                    <img
                      src={`https://redlockbox.blob.core.windows.net/public/${photoItem.value}`}
                      alt={`Мініатюра ${property.title || "об'єкта"} ${
                        index + 1
                      }`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      ) : !showTopSmallPhoto ? ( // Якщо немає validPhotos і не було показано SmallPhoto зверху
        <div className="w-full h-[250px] bg-gray-200 flex items-center justify-center text-gray-500 text-lg mt-6">
          Фото не доступне
        </div>
      ) : null}{" "}
      {/* Якщо showTopSmallPhoto було true, то фото вже показано, тут нічого */}
      {/* Lightbox компонент (рендериться завжди, якщо є слайди, але видимий тільки коли open=true) */}
      {lightboxSlides.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxSlides}
          index={lightboxIndex}
          on={{
            // Оновлюємо lightboxIndex при зміні слайда всередині lightbox
            view: ({ index: currentIndex }) => setLightboxIndex(currentIndex),
          }}
          // Додайте плагіни, які вам потрібні
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          // Налаштування для плагінів (опціонально)
          fullscreen={{ auto: false }} // автоматично не активує fullscreen ОС, а розтягує на весь viewport
          slideshow={{ autoplay: false, delay: 5000 }}
          thumbnails={{
            position: "bottom",
            width: 100,
            height: 70,
            border: 1,
            borderRadius: 4,
            padding: 1, // Відступ між рамкою та зображенням
            gap: 8, // Відступ між мініатюрами
          }}
          zoom={{
            maxZoomPixelRatio: 3, // Максимальне наближення
            scrollToZoom: true, // Дозволяє зум колесом мишки
          }}
          controller={{ closeOnBackdropClick: true }} // Закривати по кліку на фон
          // Кастомізація кнопок (наприклад, ховати, якщо одне фото)
          render={{
            buttonPrev: lightboxSlides.length <= 1 ? () => null : undefined,
            buttonNext: lightboxSlides.length <= 1 ? () => null : undefined,
          }}
        />
      )}
    </div>
  );
};

export default PropertyFullDetailsView;

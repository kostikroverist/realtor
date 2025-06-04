"use client";
import React from "react";
import { CategoryCard } from "./Category";

const Categories = () => {
  return (
    <div  data-aos="fade-right" data-aos-duration="2000"  className="max-w-[1280px] mx-auto" id="categories">
      <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center mt-5 md:mt-10">
        Категорії
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">

        <CategoryCard
          title="Комерція"
          slug="rent"
          image="https://visitukraine.today/media/blog/previews/FCe7vULIXZgMWLtsS9DZ52NM9wEhu6agl1BtBJOV.webp"
        />
        <CategoryCard
          title="Земельні ділянки"
          slug="land"
          image="https://attorneys.ua/wp-content/uploads/2022/11/zemelna_dilynka.jpeg"
        />
        <CategoryCard
          title="Будинки"
          slug="houses"
          image="https://blokbud.lviv.ua/blog/wp-content/uploads/2017/01/z-chogo-bydyvatu-bydunjk.jpg"
        />
        <CategoryCard
          title="Квартири"
          slug="flats"
          image="https://cdn.riastatic.com/photos/dom/photo/31475/3147511/314751187/314751187fm.webp"
        />
      </div>
    </div>
  );
};

export default Categories;

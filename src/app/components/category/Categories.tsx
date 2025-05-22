"use client";
import React from "react";
import { CategoryCard } from "./Category";

const Categories = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center mt-5 md:mt-10">
        Категорії
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        <CategoryCard
          title="Купити"
          image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
          onClick={() => console.log("Перехід до категорії Купити")}
        />
        <CategoryCard
          title="Оренда"
          image="https://visitukraine.today/media/blog/previews/FCe7vULIXZgMWLtsS9DZ52NM9wEhu6agl1BtBJOV.webp"
          onClick={() => console.log("Перехід до категорії Оренда")}
        />
        <CategoryCard
          title="Земельні ділянки"
          image="https://attorneys.ua/wp-content/uploads/2022/11/zemelna_dilynka.jpeg"
          onClick={() => console.log("Перехід до категорії Земельні ділянки")}
        />
        <CategoryCard
          title="Будинки"
          image="https://blokbud.lviv.ua/blog/wp-content/uploads/2017/01/z-chogo-bydyvatu-bydunjk.jpg"
          onClick={() => console.log("Перехід до категорії Будинки")}
        />
        <CategoryCard
          title="Квартири"
          image="https://cdn.riastatic.com/photos/dom/photo/31475/3147511/314751187/314751187fm.webp"
          onClick={() => console.log("Перехід до категорії Квартири")}
        />
      </div>
    </div>
  );
};

export default Categories;

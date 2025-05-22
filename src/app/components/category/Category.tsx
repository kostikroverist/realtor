"use client";
import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  onClick,
}) => {
  return (
    <div className="max-w-[450px]  shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
      <div className="relative w-[250px] md:w-[350px] xl:w-[450px] h-[250px] bg-amber-900 rounded-t-lg ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <button
        type="button"
        className="shadow-md  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
         hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800   font-medium rounded-b-lg text-sm px-5 py-2.5 text-center  w-full"
      >
        {title}
      </button>
    </div>
  );
};

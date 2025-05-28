"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  slug: string; 
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  slug,
}) => {
  return (
    <Link href={`/category/${slug}`} className="max-w-[450px] shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
      <div className="relative w-[250px] md:w-[350px] xl:w-[450px] h-[250px] bg-amber-900 rounded-t-lg ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <button
        className="shadow-md text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
        hover:bg-gradient-to-br font-medium rounded-b-lg text-sm px-5 py-2.5 text-center w-full"
      >
        {title}
      </button>
    </Link>
  );
};

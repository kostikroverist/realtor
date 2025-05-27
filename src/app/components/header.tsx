// /components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>  setIsOpen(!isOpen);

  return (
    <div
      className="bg-img h-screen bg-cover bg-center bg-black/10 bg-blend-darken"
    >
      <div className="max-w-[1280px] mx-auto">
        <nav className="flex items-center justify-between p-6 bg-black/50 text-white text-[18px] relative">
          <div className="flex items-center gap-2">
            <FaHome size={24} />
            <span className="font-bold text-white">RealEstate</span>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex gap-7">
            <Link href="/">Головна</Link>
            <Link href="category/buy">Купити</Link>
            <Link href="category/rent">Оренда</Link>
            <Link href="category/land">Земельні ділянки</Link>
            <Link href="category/houses">Будинки</Link>
            <Link href="category/about">Про мене</Link>
          </div>

          {/* Burger button */}
          <button
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col gap-6 p-6 z-10 md:hidden">
             <Link href="/">Головна</Link>
            <Link href="category/buy">Купити</Link>
            <Link href="category/rent">Оренда</Link>
            <Link href="category/land">Земельні ділянки</Link>
            <Link href="category/houses">Будинки</Link>
            <Link href="category/about">Про мене</Link>
            </div>
          )}
        </nav>

        <div className="text-white text-center mt-52 px-4 md:px-0 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 drop-shadow-lg">
            Знайдіть дім, де починається ваше щастя
          </h1>
          <p className="text-xl md:text-2xl mb-10 drop-shadow-md">
            Надійний рієлтор у вашому місті. Допоможу купити, продати чи
            орендувати нерухомість швидко й безпечно.
          </p>
          <Link
            href="/buy"
            className="max-w-[320px] inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Переглянути пропозиції
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

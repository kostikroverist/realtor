// /components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-img h-screen bg-cover bg-center bg-black/10 bg-blend-darken relative">
      <div className="max-w-[1280px] mx-auto">
        <nav data-aos="fade-up" className="flex items-center justify-between p-6 bg-black/50 text-white text-[18px] relative z-30">
          <Link href="/">
            <div className="flex items-center gap-2">
              <FaHome size={24} />
              <span className="font-bold text-white">ВашДім</span>
            </div>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-5">
            <Link
              href="/"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              Головна
            </Link>
            <Link
              href="/category/rent"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              Комерція
            </Link>
            <Link
              href="/category/land"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              Земельні ділянки
            </Link>
            <Link
              href="/category/houses"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              Будинки
            </Link>
            <Link
              href="/category/flats"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              Квартири
            </Link>
            <Link
              href="/onthemap"
              className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
            >
              На карті
            </Link>
          </div>

          {/* Burger button */}
          <button
            className="md:hidden z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black/95 text-white flex flex-col gap-6 p-6 z-40 md:hidden">
              <Link
                href="/"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Головна
              </Link>
              <Link
                href="/category/rent"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Комерція
              </Link>
              <Link
                href="/category/land"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Земельні ділянки
              </Link>
              <Link
                href="/category/houses"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Будинки
              </Link>
              <Link
                href="/category/flats"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                Квартири
              </Link>
              <Link
                href="/onthemap"
                className="text-white py-[5px] border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-sky-500 hover:border-sky-500 focus:text-sky-500 focus:border-sky-500"
                onClick={() => setIsOpen(false)}
              >
                На карті
              </Link>
            </div>
          )}
        </nav>

        <div data-aos="fade-right" className="text-white text-center mt-32 px-4 md:px-0 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 drop-shadow-lg">
            Знайдіть дім, де починається ваше щастя
          </h1>
          <p className="text-xl md:text-2xl mb-10 drop-shadow-md max-w-4xl">
            Надійний рієлтор у вашому місті. Допоможу купити, продати чи
            орендувати нерухомість швидко й безпечно.
          </p>
          <Link
            href="#categories"
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
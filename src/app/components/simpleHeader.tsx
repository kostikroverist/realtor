"use client"; // Цей рядок вже є на початку вашого файлу
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHome } from "react-icons/fa";

const SimpleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Змінюємо z-50 на z-[1000] або інше достатньо велике значення
    <header className="bg-black text-white px-6 py-4  z-[1000] sticky top-0">
      {" "}
      {/* <--- ОСЬ ЗМІНА */}
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <FaHome size={24} />
            <span className="font-bold text-white">ВашДім</span>
          </div>
        </Link>

        <div className="hidden md:flex gap-5 text-[16px]">
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

        <button
          className="md:hidden z-20" // z-index кнопки меню відносно хедера, це ОК
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {isOpen && (
        // Випадаюче меню є дочірнім елементом хедера, тому воно успадкує його контекст накладання.
        // Додатковий z-index тут зазвичай не потрібен, якщо z-index батьківського хедера достатньо високий.
        <div className="absolute top-full left-0 w-full text-center bg-black text-white flex flex-col gap-4 p-6 md:hidden">
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
      )}
    </header>
  );
};

export default SimpleHeader;

"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaHome } from "react-icons/fa";

const SimpleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white px-6 py-4 relative z-50">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaHome size={24} />
          <span className="font-bold text-white text-lg">RealEstate</span>
        </div>

        <div className="hidden md:flex gap-6 text-[16px]">
          <Link href="/">Головна</Link>
          <Link href="buy">Купити</Link>
          <Link href="rent">Оренда</Link>
          <Link href="land">Земельні ділянки</Link>
          <Link href="houses">Будинки</Link>
          <Link href="about">Про мене</Link>
        </div>

        <button
          className="md:hidden z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-6 md:hidden">
          <Link href="/">Головна</Link>
          <Link href="category/buy">Купити</Link>
          <Link href="category/rent">Оренда</Link>
          <Link href="category/land">Земельні ділянки</Link>
          <Link href="category/houses">Будинки</Link>
          <Link href="category/about">Про мене</Link>
        </div>
      )}
    </header>
  );
};

export default SimpleHeader;

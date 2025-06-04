import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-neutral-300 py-[30px] px-5 text-center border-t border-neutral-700 mt-10">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-5">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5">
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
        </nav>
        <div className="footer-copyright">
          <p className="text-sm text-neutral-400 m-0">
            &copy; {currentYear} ВашCompanyName. Всі права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
}
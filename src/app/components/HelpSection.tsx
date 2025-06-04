export default function HelpSection() {
  const phoneNumber = "0661232123";

  return (
    <div
      className="flex justify-center items-center py-20 px-4 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50 opacity-30"></div>

      <div className="relative bg-white/90 backdrop-blur-lg border border-sky-200/50 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-sky-400/20 to-cyan-400/20 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-400/20 to-sky-400/20 rounded-full translate-x-12 translate-y-12"></div>

        <div className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 p-8 text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">
            Потрібна допомога?
          </h3>
          <p className="text-white/95 text-base">
            Зателефонуйте нам прямо зараз
          </p>
        </div>

        <div className="relative p-8 text-center">
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            Наші експерти готові відповісти на всі ваші запитання щодо
            нерухомості
          </p>

          <a
            href={`tel:${phoneNumber}`}
            className="group inline-block w-full bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 hover:from-sky-600 hover:via-sky-700 hover:to-cyan-600 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/25 active:scale-95 shadow-lg"
          >
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 mr-4 group-hover:animate-pulse">
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-xl tracking-wider font-semibold">
                {phoneNumber}
              </span>
            </div>
          </a>

          <div className="mt-6 flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-medium">
              Працюємо 24/7 • Безкоштовна консультація
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

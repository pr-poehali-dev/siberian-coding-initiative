export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-stone-950 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-500 text-xs sm:text-sm tracking-widest">Главы</h3>
                <a href="#ancient" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Античность
                </a>
                <a href="#middle" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Средневековье
                </a>
                <a href="#modern" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Новое время
                </a>
                <a href="#xx" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  XX век
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-500 text-xs sm:text-sm tracking-widest">Проект</h3>
                <a href="#intro" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Введение
                </a>
                <a href="#practice" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Практическая часть
                </a>
                <a href="#sources" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Источники
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[11vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight uppercase">
                История<br />Спорта
              </h1>
              <p className="text-amber-500 text-sm sm:text-base">Итоговый проект · 9 класс · {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

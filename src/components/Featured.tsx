export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/desk.png"
          alt="Рабочий стол с документами"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые возможности</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Microsoft Word — это не просто редактор текста. Это инструмент для создания профессиональных документов,
          отчётов, рефератов и презентаций любой сложности.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          {["Форматирование текста и стили", "Вставка таблиц, рисунков и диаграмм", "Проверка орфографии и грамматики", "Совместная работа в реальном времени"].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
              <span className="text-neutral-700 text-base">{feature}</span>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать больше
        </button>
      </div>
    </div>
  );
}

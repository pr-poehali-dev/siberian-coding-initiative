const chapters = [
  { era: "776 до н.э.", title: "Античные истоки", desc: "Олимпийские игры Древней Греции — религиозный праздник, священное перемирие и культ состязательности" },
  { era: "Средневековье", title: "Рыцарские турниры", desc: "Спорт аристократии как демонстрация воинского мастерства и народные игры — прото-футбол" },
  { era: "1896", title: "Возрождение Олимпиад", desc: "Барон де Кубертен и первые современные Олимпийские игры в Афинах — рождение нового международного движения" },
  { era: "XX век", title: "Спорт и идеологии", desc: "Берлин 1936, система ГТО в СССР, бойкоты Олимпиад — спорт как оружие в холодной войне" },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Исторические соревнования"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Структура проекта</h3>
        <p className="text-2xl lg:text-3xl mb-10 text-neutral-900 leading-tight">
          От Древней Греции до глобального бизнеса XXI века — четыре эпохи, которые определили спорт таким, каким мы его знаем.
        </p>
        <div className="flex flex-col gap-5 mb-10">
          {chapters.map((ch) => (
            <div key={ch.era} className="flex gap-4 items-start">
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wide pt-1 w-24 shrink-0">{ch.era}</div>
              <div>
                <div className="font-semibold text-neutral-900 mb-0.5">{ch.title}</div>
                <div className="text-neutral-500 text-sm leading-snug">{ch.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать проект
        </button>
      </div>
    </div>
  );
}

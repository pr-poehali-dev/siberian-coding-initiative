import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const slides = [
  {
    era: "776 до н.э.",
    title: "Античные истоки",
    color: "bg-amber-950",
    accent: "text-amber-400",
    content: [
      "Олимпийские игры зародились в Древней Греции в 776 году до н.э. как религиозный праздник в честь Зевса. Соревнования проводились каждые четыре года в Олимпии и собирали атлетов со всей Эллады.",
      "На время Игр объявлялось священное перемирие — «экехерия». Войны прекращались, и даже враждующие полисы могли свободно посылать своих участников. Спорт становился языком мира.",
      "Программа включала бег, борьбу, кулачный бой, пятиборье и гонки на колесницах. Победитель получал венок из оливковых ветвей — но прославлялся как герой на века. Пиндар посвящал чемпионам торжественные оды.",
    ],
    quote: "«Побеждает тот, кто победил себя» — спортивный идеал Древней Греции",
  },
  {
    era: "Средневековье",
    title: "Рыцарские турниры",
    color: "bg-stone-900",
    accent: "text-stone-300",
    content: [
      "В Средние века спорт разделился на два мира: аристократический и народный. Рыцарские турниры были демонстрацией воинского мастерства, политической силы и куртуазности. Зрелище привлекало тысячи зрителей.",
      "Простой народ развлекался иначе: прото-футбол (народный мяч), борьба, метание камней, стрельба из лука. Во многих городах Англии в футбол играли целыми кварталами — без правил, от рассвета до заката.",
      "Церковь нередко осуждала жестокие игры, а королевские указы запрещали футбол — он отвлекал горожан от военных упражнений. Но никакие запреты не могли победить народную любовь к состязаниям.",
    ],
    quote: "«Рыцарский турнир — война понарошку, чтобы научиться воевать всерьёз»",
  },
  {
    era: "1896",
    title: "Возрождение Олимпиад",
    color: "bg-blue-950",
    accent: "text-blue-300",
    content: [
      "Французский аристократ барон Пьер де Кубертен мечтал возродить олимпийский дух. В 1894 году на Международном конгрессе в Париже был основан МОК — Международный олимпийский комитет.",
      "Первые современные Олимпийские игры прошли в Афинах в 1896 году. 241 атлет из 14 стран соревновались в 43 видах спорта. Греческий бегун Спиридон Луис стал национальным героем, победив в марафоне.",
      "Де Кубертен верил: международный спорт сближает народы и воспитывает молодёжь. Девиз «Citius, Altius, Fortius» — «Быстрее, выше, сильнее» — стал символом нового движения, объединившего весь мир.",
    ],
    quote: "«Важна не победа, а участие» — Пьер де Кубертен",
  },
  {
    era: "XX век",
    title: "Спорт и идеологии",
    color: "bg-zinc-900",
    accent: "text-red-400",
    content: [
      "Берлин 1936: Адольф Гитлер планировал использовать Олимпиаду для демонстрации превосходства арийской расы. Но чернокожий американец Джесси Оуэнс выиграл четыре золотые медали, опровергнув нацистскую пропаганду.",
      "В СССР спорт стал государственной идеологией. Система ГТО («Готов к труду и обороне»), клубы «Динамо» и ЦСКА, огромные вложения в олимпийскую подготовку — всё ради превосходства над Западом на международной арене.",
      "1980 и 1984 годы — эпоха бойкотов. США не приехали в Москву из-за войны в Афганистане, СССР ответил бойкотом Лос-Анджелеса. Холодная война полностью захватила спорт, превратив Олимпиаду в политическое противостояние.",
    ],
    quote: "«Спорт — это война без выстрелов» — Джордж Оруэлл",
  },
];

export default function Slides() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const slide = slides[current];

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => { if (current > 0) go(current - 1); };
  const next = () => { if (current < slides.length - 1) go(current + 1); };

  return (
    <div className={`min-h-screen ${slide.color} text-white transition-colors duration-700 flex flex-col`}>
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-5 shrink-0">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wide"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <div className={`text-sm font-bold ${slide.accent}`}>
          {current + 1} / {slides.length}
        </div>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="max-w-4xl mx-auto w-full"
          >
            <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${slide.accent}`}>
              {slide.era}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 leading-tight">
              {slide.title}
            </h1>
            <div className="flex flex-col gap-5 mb-10">
              {slide.content.map((para, i) => (
                <p key={i} className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                  {para}
                </p>
              ))}
            </div>
            <blockquote className={`border-l-2 pl-5 ${slide.accent} border-current italic text-sm md:text-base opacity-80`}>
              {slide.quote}
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-6 shrink-0">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-5 py-2.5 border border-white/30 text-sm uppercase tracking-wide hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>

        {current < slides.length - 1 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm uppercase tracking-wide hover:bg-white/90 transition-all duration-200 font-semibold"
          >
            Далее
            <Icon name="ArrowRight" size={16} />
          </button>
        ) : (
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm uppercase tracking-wide hover:bg-white/90 transition-all duration-200 font-semibold"
          >
            Завершить
            <Icon name="Check" size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

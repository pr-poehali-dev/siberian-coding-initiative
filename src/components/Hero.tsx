import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Фон"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Итоговый проект · 9 класс</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          MICROSOFT<br />WORD
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Мощный текстовый редактор, который изменил способ работы с документами во всём мире
        </p>
      </div>
    </div>
  );
}

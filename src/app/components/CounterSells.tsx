'use client';

import React from "react";
import { useInView } from "react-intersection-observer";
import StatCard from "./StatCard";

const stats = [
  { number: "+184", title: "Продано" },
  { number: "+125", title: "Здано" },
  { number: "+8", title: "Років на ринку" },
];

const CounterSells = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#d3e0ec] py-12 px-4 rounded-xl mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-center ">
        Кількість моїх Угод
      </h2>

      <div
        ref={ref}
        className="gap-8 md:gap-24 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-center items-center"
      >
        {stats.map((item, index) => (
          <StatCard
            key={index}
            number={item.number}
            title={item.title}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default CounterSells;

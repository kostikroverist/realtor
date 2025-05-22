import React from "react";
import CountUp from "react-countup";
type StatCardProps = {
  number: string;
  title: string;
  inView: boolean;
};
const StatCard = ({ number, title, inView }: StatCardProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl w-[200px] md:w-[250px] flex flex-col justify-center items-center transition-all duration-300 hover:scale-105">
    <h3 className="text-[56px] leading-[56px]   font-bold text-blue-900 mb-2">
      <CountUp
        end={parseFloat(number)}
        duration={3}
        separator=","
        decimals={number.includes('+') ? 0 : 2}
        suffix={number.includes('+') ? '+' : ''}
        start={inView ? 0 : undefined}
      />
    </h3>
    <p className="text-[16px] lg:text-[20px] leading-tight text-gray-700 text-center">{title}</p>
  </div>
);

export default StatCard;

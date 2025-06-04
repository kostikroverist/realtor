import Image from "next/image";
import React from "react";

const InfoRealtor = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg  mx-auto pt-10 pb-10">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
        Інформація про мене
      </h2>
      <div  className="flex flex-col md:flex-row items-center md:justify-evenly max-w-[1280px] mx-auto mt-[30px]">
        <div data-aos="fade-right" className="flex justify-center mb-5 ">
          <Image
            src="/images/realtor.jpg"
            alt="Realtor"
            width={250}
            height={300}
            className="rounded-[50%] shadow-lg"
          />
        </div>
        <p data-aos="fade-right" className="text-gray-700 max-w-[500px] text-center ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default InfoRealtor;

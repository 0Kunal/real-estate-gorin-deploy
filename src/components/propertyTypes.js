import React from "react";

const PropertyTypes = () => {
  const types = [
    {
      title: "Retail",
      img: "/retail.svg",
    },
    {
      title: "Multi-family",
      img: "/multifamily.svg",
    },
    {
      title: "Office",
      img: "/office.svg",
    },
    {
      title: "Industrial",
      img: "/industrial.svg",
    },
    {
      title: "Hotel",
      img: "/hotel.svg",
    },
    {
      title: "Land",
      img: "/land.svg",
    },
  ];
  return (
    <div className="flex flex-col items-center px-[30px] md:px-[150px] py-[80px] bg-white text-center">
      <div className="font-semibold text-[15px] text-[#7261FF] leading-[14.3px]">
        Create OMs and Ads For
      </div>
      <div className="font-bold text-[28px] text-black leading-[42px] mt-[5px]">
        Various Real Estate Property Types
      </div>
      <div className="max-w-[810px] flex flex-row justify-center lg:justify-around flex-wrap gap-[30px] md:gap-[50px] mt-[50px]">
        {types.map((type, index) => (
          <div
            key={index}
            className="flex flex-row justify-center items-center bg-[#9E9E9E1F] w-[190px] h-[140px] rounded-[10px]"
          >
            <div className="flex flex-col items-center text-center gap-[10px]">
              <img
                src={type.img}
                alt={type.title}
                className="w-[50px] h-[50px] object-cover"
              />
              <div className="font-semibold text-[18px] text-[#323232] leading-[14.3px]">
                {type.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;

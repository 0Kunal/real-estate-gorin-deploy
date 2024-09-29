import React from "react";

const Samples = () => {
  const properties = [
    {
      img: "/sample1.png",
      title: "Retail OM",
      discription: "strip centers, street retail, vehicle related, and more.",
    },
    {
      img: "/sample2.png",
      title: "Multi-Family OM",
      discription: "garden, low-rise, mid-rise, high-rise.",
    },
    {
      img: "/sample3.png",
      title: "Office OM",
      discription: "all classes of office buildings, loft/creative, medical.",
    },
  ];

  return (
    <div className="bg-[url(/samples-bg.png)] bg-center bg-no-repeat flex justify-center items-center px-5 md:px-[64px] py-[50px]">
      <div className="w-full flex flex-col items-center text-center bg-white px-[24px] py-[50px] rounded-[10px]">
        <div className="font-semibold text-4xl text-black leading-[55px]">
          Sample OMs created with our platform
        </div>
        <div className="max-w-[1151px] flex flex-row justify-center lg:justify-around gap-[32.49px] flex-wrap">
          {properties.map((property, index) => (
            <div
              key={index}
              className="flex flex-col text-start md:w-[357px] border border-[#84848433] rounded-[5px] overflow-hidden"
            >
              <img src={property.img} alt={property.title} />
              <div className="flex flex-col p-5 gap-[10px]">
                <div className="font-semibold text-[20px] text-black leading-[14.3px]">
                  {property.title}
                </div>
                <div className="min-h-[42px] font-normal text-[14px] text-[#52525B] leading-[21px] mt-">
                  {property.discription}
                </div>
                <div className="h-[40px] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#7261FF] text-white font-medium">
                  View Sample Template
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samples;

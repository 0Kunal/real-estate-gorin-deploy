import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Banner = () => {
  return (
    <div className="bg-[url(/banner-bg.png)] bg-center bg-no-repeat flex flex-row flex-wrap justify-center lg:justify-around px-[30px] md:px-[150px] py-[80px] gap-y-5">
      <div className="flex flex-col p-6 gap-6 max-w-[573px]">
        <div className="font-bold text-[54px] leading-[66px]">
          Sell CRE Faster
          <span className="font-normal"> with OMs & Ads created in </span>
          minutes
        </div>
        <div className="font-normal text-[20px] leading-[34px]">
          Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
          Ads in minutes with our AI powered platform
        </div>
        <div className="flex flex-row gap-5">
          <div className="h-[48px] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#7261FF] text-white font-medium gap-[9px] px-4">
            Try For Free <ArrowForwardOutlinedIcon />
          </div>
          <div className="h-[40.95px] flex flex-row items-center gap-[10px] font-normal text-[16.8px] tracking-[0.52px] text-[#2F2F2F] cursor-pointer">
            <img src="/play.svg" alt="play" />
            Watch Demo
          </div>
        </div>
      </div>
      <div className="max-w-[528.73px]">
        <img src="/banner-img.png" alt="banner-img" />
      </div>
    </div>
  );
};

export default Banner;

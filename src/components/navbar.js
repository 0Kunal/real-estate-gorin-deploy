import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="h-[87px] bg-white flex items-center justify-between px-[30px] md:px-[150px]">
      <img src="/logo.png" alt="logo" className="h-[29px] w-[131px]" />
      <Sidebar />
      <div className="hidden md:flex flex-row items-center gap-[41px] text-sm leading-[22.68px] font-normal">
        <div className="cursor-pointer">Feature</div>
        <div className="cursor-pointer">Pricing</div>
        <div className="font-medium flex justify-center items-center cursor-pointer gap-[5px]">
          <LockOutlinedIcon fontSize="14px" />
          Login
        </div>
        <div className="h-[39px] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#7261FF] text-white font-medium px-5">
          Try For Free
        </div>
      </div>
    </div>
  );
};

export default Navbar;

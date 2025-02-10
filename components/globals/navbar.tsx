"use client";
import { BrandLogo } from "../components";
import plus_button from "@/public/assets/images/plus_button.svg";
import calculator_button from "@/public/assets/images/calculator_button.svg";
import pos_button from "@/public/assets/images/pos_button.svg";
import cash_button from "@/public/assets/images/cash_button.svg";
import notification_icon from "@/public/assets/icons/notification_icon.svg";
import profile_pic from "@/public/assets/images/profile_pic.svg";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sidebar";
import useSidebar from "@/atoms/SidebarAtom";
import Cookies from "js-cookie";

const Navbar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useSidebar();

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const token = Cookies.get("token");

  const currentDate = new Date().toLocaleDateString();
  const formattedCurrentDate = currentDate.replace(/\//g, "-");
  return (
    <>
      <div className="navbar fixed w-full bg-gradient-to-r from-[#2CCE8A] to-[#1B9AA9] flex items-center justify-between px-5 py-4">
        <BrandLogo className="lg:block hidden" />
        <button className="lg:hidden text-white" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
        <div className="flex items-center gap-[40px]">
          <div className="flex items-center gap-[24px]">
            <button type="button">
              <Image src={plus_button} alt="plus" height={35} />
            </button>
            <button type="button">
              <Image src={calculator_button} alt="plus" height={35} />
            </button>
            <button type="button">
              <Image src={pos_button} alt="plus" height={35} />
            </button>
            <button type="button">
              <Image src={cash_button} alt="plus" height={35} />
            </button>
            <p className="text-white">{formattedCurrentDate}</p>
          </div>
          <button>
            <Image src={notification_icon} alt="plus" />
          </button>
          <span className="flex items-center gap-[16px]">
            <Image src={profile_pic} alt="" />
            <p className="text-white">Clark Kent</p>
          </span>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;

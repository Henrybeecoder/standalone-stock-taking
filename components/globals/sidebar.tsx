"use client";
import { sidebarData } from "@/data/sidebar-data";
import Image from "next/image";
import arrow_icon from "@/public/assets/icons/navbar/arrow_icon.svg";
import { useState } from "react";
import Link from "next/link";
import useSidebar from "@/atoms/SidebarAtom";

const Sidebar = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<string>("");
  const [sidebarIsOpen, setSidebarIsOpen] = useSidebar();

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  const handleDropdownClick = (name: string) => {
    setDropdownIsOpen((prev) => (prev === name ? "" : name));
  };

  return (
    <div
      className={`sidebar bg-[#22243D] top-[73px] w-[309px] h-screen fixed overflow-y-scroll flex flex-col gap-[10px] transition-transform duration-300 ${
        sidebarIsOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Add an overlay for medium screens */}
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ${
          sidebarIsOpen ? "block lg:hidden" : "hidden"
        }`}
        onClick={toggleSidebar}
      />
      {sidebarData.map((item, index) => {
        const isOpen = dropdownIsOpen === item.name;
        return (
          <div
            key={index}
            className={`pr-4 w-full flex flex-col items-start group cursor-pointer relative`}
          >
            <div
              className={`w-[5px] h-[40px] bg-[#05A55A] ${
                isOpen ? "opacity-100" : "opacity-0"
              } group-hover:opacity-100 absolute left-0 top-0`}
            />
            <div
              className={`w-full flex items-center justify-between px-[20px] py-2 hover:bg-[#1D1F33] rounded-[5px] ${
                isOpen && "bg-[#1D1F33]"
              }`}
              onClick={() => handleDropdownClick(item.name)}
            >
              {item.children == null && item.href !== null ? (
                <Link
                  href={item.href}
                  className="flex items-center w-full gap-2"
                >
                  {item.icon && <Image src={item.icon} alt={"icon-" + index} />}
                  <p className="text-sm text-white">{item.name}</p>
                </Link>
              ) : (
                <span className="flex items-center w-full gap-2">
                  {item.icon && <Image src={item.icon} alt={"icon-" + index} />}
                  <p className="text-sm text-white">{item.name}</p>
                </span>
              )}
              {item.children !== null && (
                <Image
                  src={arrow_icon}
                  alt="arrow-icon"
                  className={`${
                    isOpen && "rotate-90 transition-transform duration-300"
                  }`}
                />
              )}
            </div>
            {isOpen && item.children && (
              <div className={`pl-[40px] ml-[20px]`}>
                {item.children.map((child, childIndex) => (
                  <Link key={childIndex} href={child.href}>
                    <p className="text-sm text-white py-1">{child.name}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;

import React from "react";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Image from "next/image";
import square from "../../../public/svg/SquaremeImg.svg";
import menuImg from "../../../public/svg/menu-01.svg";
import bell from "../../../public/svg/bell-Icon.svg";
import down from "../../../public/svg/Vector-down.svg";

interface HeaderProps {
  onMenuClick: () => void;
  totalEarnings: number;
}

const Header = ({ onMenuClick, totalEarnings }: HeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between  py-2 w-full  px-12 ">
        {isMobile && (
          <div className="flex items-center">
            <button
              // variant="ghost"
              // size="icon"
              // className="mr-2 md:mr-4"
              onClick={onMenuClick}
            >
              {/* <Menu className="h-6 w-6" /> */}

              {/* Image goes here */}

              {isMobile && (
                <Image
                  src={menuImg}
                  alt="menu"
                  width={30}
                  height={30}
                  className=""
                />
              )}

              {/* <Image
              src={menuImg}
              alt="menu"
              width={30}
              height={30}
              className=""
            /> */}
            </button>
          </div>
        )}
        <div className="flex items-center justify-center">
          {" "}
          <Image
            src={square}
            alt="Squareme"
            width={80}
            height={80}
            className=""
          />
        </div>

        {/* Icon Notification Section */}

        <div className="flex items-center  gap-4">
          {" "}
          <Image
            src={bell}
            alt="Notification"
            width={15}
            height={15}
            className=""
          />
          <div className=" flex items-center justify-center rounded-full h-9 w-9 bg-[#56b98e] text-[14px]  font-semibold text-white">
            GA
          </div>
          {!isMobile && (
            <Image
              src={down}
              alt="Caret Down"
              width={10}
              height={10}
              className=" cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* Header */}
    </div>
  );
};

export default Header;

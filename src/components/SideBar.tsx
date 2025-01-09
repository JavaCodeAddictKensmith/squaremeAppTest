"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
import { MapPin, Trash, Coins, Medal, Settings, Home, Car } from "lucide-react";
import globe from "../../public/svg/globe-02.svg";
import dashboard from "../../public/svg/element-2.svg";
import wallet from "../../public/svg/empty-wallet.svg";
import icon from "../../public/svg/Icon.svg";
import document from "../../public/svg/document.svg";
import settings from "../../public/svg/setting-2.svg";

import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";

const sidebarItems = [
  {
    href: "/get-started",
    icon: <Image src={globe} alt="Globe" width={20} height={20} />,
    label: "Get Started",
  },
  {
    href: "/",
    icon: (
      <Image
        src={dashboard}
        alt="dashboard"
        width={20}
        height={20}
        className=""
      />
    ),
    label: "Dashboard",
  },

  {
    href: "/accounts",
    icon: (
      <Image src={wallet} alt="wallet" width={20} height={20} className="" />
    ),
    label: "Accounts",
  },

  {
    href: "/transfers",
    icon: <Image src={icon} alt="icon" width={20} height={20} className="" />,
    label: "Transfers",
  },

  {
    href: "/transactions",
    icon: (
      <Image
        src={document}
        alt="document"
        width={20}
        height={20}
        className=""
      />
    ),
    label: "Transactions",
  },

  {
    href: "/settings",
    icon: (
      <Image
        src={settings}
        alt="settings"
        width={20}
        height={20}
        className=""
      />
    ),
    label: "Settings",
  },
  //   { href: "/", icon: <PAIconGlobe />, label: "Home" },
  //   { href: "/report", icon: MapPin, label: "Report Waste" },
  //   { href: "/collect", icon: Trash, label: "Collect Waste" },
  //   { href: "/rewards", icon: Coins, label: "Rewards" },
  //   { href: "/leaderboard", icon: Medal, label: "Leaderboard" },
];

interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-white border-r pt-20 border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <nav className="h-full flex flex-col justify-between">
        <div className="px-10 py-6 space-y-8">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <div
                // variant={pathname === item.href ? "secondary" : "ghost"}
                className={`w-full justify-start  gap-2 flex py-3 ${
                  pathname === item.href
                    ? "bg-[#4975E0] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {/* <item.icon className="mr-3 h-5 w-5" /> */}
                <div className=" justify-center items-center"> {item.icon}</div>

                <div className=" justify-center items-center">
                  {" "}
                  <span className="text-base">{item.label}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="p-4 border-t border-gray-200">
          <Link href="/settings" passHref>
            <button
              //   variant={pathname === "/settings" ? "secondary" : "outline"}
              className={`w-full py-3 ${
                pathname === "/settings"
                  ? "bg-green-100 text-green-800"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <Settings className="mr-3 h-5 w-5" />
              <span className="text-base">Settings</span>
            </button>
          </Link>
        </div> */}
      </nav>
    </aside>
  );
}

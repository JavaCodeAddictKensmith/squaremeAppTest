import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import copy from "../../../public/svg/copy.svg";
import Image from "next/image";

export const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Trailing Year"
        value="$278,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

export const Card = ({
  title,
  value,
  pillText,
  trend,
  period,
  bank,
}: {
  title: string;
  value: string;
  pillText: string;
  trend: "up" | "down";
  period: string;
  bank?: string;
}) => {
  return (
    <div className=" p-4 rounded border border-stone-300 w-[400px]">
      <h3 className="text-stone-500 mb-2 text-base">{title}</h3>

      <div className="text-[#000000] mb-2 text-sm">{bank}</div>
      {/* <p className="text-xs text-stone-500">{period}</p> */}

      <div className="flex mb-2 items-start justify-between mt-3">
        <div>
          {/* <h3 className="text-stone-500 mb-2 text-sm">{title}</h3> */}
          <p className=" text-2xl font-bold">{value}</p>
        </div>

        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 rounded ${"bg-[#9F56D4]/30 text-[#9F56D4]"}`}
        >
          {
            <Image
              src={copy}
              alt="dashboard"
              width={20}
              height={20}
              className=""
            />
          }{" "}
          {pillText}
        </span>
      </div>
    </div>
  );
};

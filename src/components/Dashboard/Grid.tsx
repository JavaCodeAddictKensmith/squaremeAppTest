"use client";
import React from "react";
import { StatCards } from "./StatCards";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";
import DatePicker from "react-datepicker";
import { Card } from "./StatCards";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", uv: 250, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 450, pv: 2400, amt: 2400 },
  { name: "March", uv: 350, pv: 2400, amt: 2400 },
  { name: "April", uv: 280, pv: 2400, amt: 2400 },
  { name: "May", uv: 120, pv: 2400, amt: 2400 },
  { name: "June", uv: 180, pv: 2400, amt: 2400 },
  { name: "July", uv: 150, pv: 2400, amt: 2400 },
  { name: "August", uv: 180, pv: 2400, amt: 2400 },
  { name: "September", uv: 150, pv: 2400, amt: 2400 },
  { name: "October", uv: 180, pv: 2400, amt: 2400 },
  { name: "November", uv: 220, pv: 2400, amt: 2400 },
  { name: "December", uv: 300, pv: 2400, amt: 2400 },
];

export const Grid = () => {
  return (
    <div className=" ">
      <div className=" mt-4  mb-4  border-b-[1px] border-stone-300">
        <div className=" py-6 border-b-[#4975E0] border-b-[2px]  w-64 ml-4 flex justify-center items-center  font-semibold ">
          Online Payments
        </div>
      </div>
      <div className=" mt-16">
        <Card
          title="Gross Revenue"
          value="$120,054.24"
          pillText="2.75%"
          trend="up"
          period="From Jan 1st - Jul 31st"
        />
        <div className=" w-full   min-h-[700px] p-4 rounded border border-stone-300 mt-6">
          {" "}
          <div className="flex justify-between flex-wrap py-3">
            <div className="flex flex-wrap">
              <div className="flex gap-4 ">
                <div className="relative">
                  <div className="flex items-center justify-center mt-1 gap-3">
                    <div>Showing data for</div>
                    <select
                      className=" shadow-sm  text-sm focus:outline-none cursor-pointer h-[37px] px-5 py-2.5 rounded-[5px] border border-[#949494] justify-start items-end gap-2 inline-flex md:min-w-[12.5rem]"
                      // onChange={(e) => {}}
                      // onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="" key="all-bids">
                        All Closed Market Bids
                      </option>
                      <option value="BID_ACTIVE" key="bid-active">
                        Bid Active Request
                      </option>
                      <option value="POSTED" key="posted-request">
                        Posted Request
                      </option>
                    </select>
                  </div>
                  {/* <DatePicker
              selected={startDate}
              onChange={(update) => setDateRange(update)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="Filters"
              className="border  border-[#ccc] px-4 py-2 cursor-pointer rounded-md w-60"
            /> */}

                  <div className="absolute top-2/4 right-3 transform -translate-y-2/4 pointer-events-none">
                    {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg> */}
                  </div>
                </div>
              </div>

              <div className="flex ml-2">
                {/* <button
            neutral
            className="flex !text-[#565656] gap-2 text-xs font-medium items-center  md:mb-0 border border-[#ccc] bg-white py-2 px-[24px] rounded-[5px] gap-x-[4px] lg:px-[15px] xl:px-[24px] h-[37px]"
          >
            <p className="whitespace-nowrap">Export</p>
          </button> */}
              </div>
            </div>
            {/* <div className=" flex items-center justify-center bg-red"> */}
            <div className="flex  justify-between  items-center gap-5">
              <div>Today</div>
              {/* <div>Last 7 Days</div> */}
              <button
                neutral
                className="flex   font-medium bg-[#EDF6FA] items-center mb-[10px] md:mb-0  py-[12px] px-[24px] rounded-[5px] gap-x-[4px] lg:px-[15px] xl:px-[24px]"
              >
                <p className="whitespace-nowrap"> Last 7 Days</p>
              </button>
              <div>Last 30 Days</div>
              {/* <div className="relative flex">
          <input
            placeholder="Search for requests"
            className="pl-10 w-full py-2 border rounded-md border[#CCCCCC] outline-none md:w-[350px] !border-silver"
          />
        </div> */}
            </div>
            {/* </div> */}
          </div>
          <div className=" w-full   h-[400px] bg-white p-4 rounded border border-stone-300  mt-5">
            <div className=" flex  flex-col mb-7">
              {" "}
              <div className=" flex  gap-4">
                <div className=" text-black text-base font-semibold">
                  {" "}
                  Revenue
                </div>
                <div className=" text-black font-thin text-sm ">
                  {" "}
                  <span className="text-green-400 font-thin text-sm">
                    + 0.00%{" "}
                  </span>
                  Vs last 7 days
                </div>
              </div>
              <div className=" text-black  font-medium text-sm  mt-3">
                {" "}
                <span className="text-black  text-xl font-bold">N 0.00 </span>
                in total value
              </div>
            </div>

            {/* chart section */}

            <div>
              <BarChart width={900} height={300} data={data}>
                <XAxis dataKey="name" stroke="#9C9CB8" />
                <YAxis stroke="#9C9CB8" />
                <Tooltip
                  wrapperStyle={{ width: 100, backgroundColor: "#ccc" }}
                />
                <Legend
                  width={100}
                  wrapperStyle={{
                    top: 40,
                    right: 20,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#F5C35D" barSize={30} />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="px-4 grid gap-3 grid-cols-12 w-full">
    //   <StatCards />
    //   {/* <ActivityGraph />
    //   <UsageRadar /> */}
    //   {/* <RecentTransactions /> */}
    // </div>
  );
};

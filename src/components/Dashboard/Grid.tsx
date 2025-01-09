"use client";
import React from "react";
import { Card } from "./StatCards";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { useMediaQuery } from "../hooks/useMediaQuery";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchUserAccountDetails } from "../../features/Transactions/transactionSlice";
import { useEffect } from "react";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch<AppDispatch>();
  const { userAccounts } = useSelector(
    (state: RootState) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchUserAccountDetails());
  }, [dispatch]);

  if (userAccounts?.loading) return <p>Loading...</p>;
  if (userAccounts?.error) return <p>Error: {userAccounts?.error}</p>;

  return (
    <div className="p-4">
      <div className="mt-4 mb-4 border-b border-stone-300">
        <div className="py-6 border-b-2 border-blue-500 w-64 mx-4 flex justify-center items-center font-semibold">
          Online Payments
        </div>
      </div>

      <div className="mt-16">
        <Card
          title="ACCOUNT DETAILS"
          value={userAccounts?.data && userAccounts?.data[0]?.amount}
          pillText="copy"
          trend="up"
          period=""
          bank={userAccounts?.data && userAccounts?.data[0]?.bankName}
        />

        <div className="w-full min-h-[700px] p-4 rounded border border-stone-300 mt-6">
          {!isMobile && (
            <div className="flex justify-between flex-wrap py-3">
              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span>Showing data for</span>
                    <select className="shadow-sm text-sm focus:outline-none cursor-pointer h-10 px-5 py-2.5 rounded border border-gray-400">
                      <option value="" key="all-bids">
                        Last 7 Days
                      </option>
                      {/* <option value="BID_ACTIVE" key="bid-active">
                        Bid Active Request
                      </option>
                      <option value="POSTED" key="posted-request">
                        Posted Request
                      </option> */}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span>Today</span>
                <button className="font-medium bg-blue-100 py-2 px-4 rounded">
                  Last 7 Days
                </button>
                <span>Last 30 Days</span>
              </div>
            </div>
          )}
          <div className="w-full h-[400px] bg-white p-4 rounded border border-stone-300  mt-12">
            {isMobile && (
              <div className=" flex justify-between w-full">
                {" "}
                <div className="text-black text-base font-semibold">
                  Revenue
                </div>
                <div>
                  {" "}
                  <select className="shadow-sm text-sm focus:outline-none cursor-pointer h-10 px-5 py-2.5 rounded-[20px] border border-gray-400">
                    <option value="" key="all-bids">
                      Weekly
                    </option>
                    <option value="" key="all-bids">
                      Daily
                    </option>
                    <option value="BID_ACTIVE" key="bid-active">
                      Monthly
                    </option>
                    <option value="POSTED" key="posted-request">
                      Yearly
                    </option>
                  </select>
                </div>
              </div>
            )}
            <div className="flex flex-col mb-7">
              {!isMobile && (
                <div className="flex gap-4">
                  <span className="text-black text-base font-semibold">
                    Revenue
                  </span>
                  <span className="text-sm text-gray-500">
                    <span className="text-green-400">
                      +{" "}
                      {userAccounts?.data && userAccounts?.data[0]?.revenuePer}{" "}
                      %
                    </span>{" "}
                    Vs last 7 days
                  </span>
                </div>
              )}
              {!isMobile && (
                <div className="mt-3 text-black text-xl font-bold">
                  {userAccounts?.data && userAccounts?.data[0]?.revenue}{" "}
                  <span className="text-sm font-medium">in total value</span>
                </div>
              )}
            </div>

            {/* Responsive Chart Container */}
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#9C9CB8" />
                <YAxis stroke="#9C9CB8" />
                <Tooltip wrapperStyle={{ backgroundColor: "#ccc" }} />
                <Legend
                  wrapperStyle={{
                    top: 0,
                    right: 0,
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #d5d5d5",
                    borderRadius: 3,
                    lineHeight: "40px",
                  }}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="uv" fill="#F5C35D" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

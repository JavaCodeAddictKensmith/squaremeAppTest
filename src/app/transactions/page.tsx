"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@/components/hooks/useMediaQuery";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uploadcloud from "../../../public/svg/upload-cloud.svg";
import Image from "next/image";
import Table from "../../components/Table";

const TransactionsPage = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // State for date range selection
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleCheckboxChange = (row) => {
    // Placeholder for checkbox logic
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const data = [
    {
      id: "1",
      amount: "N43,644",
      transactionId: "TR_8401857902",
      transactionType: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      id: "2",
      amount: "N35,471",
      transactionId: "TR_8401857902",
      transactionType: "Withdrawal",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      id: "3",
      amount: "N43,644",
      transactionId: "TR_8401857902",
      transactionType: "Deposit",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      id: "4",
      amount: "N35,471",
      transactionId: "TR_8401857902",
      transactionType: "Request",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      id: "5",
      amount: "N43,644",
      transactionId: "TR_8401857902",
      transactionType: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
    {
      id: "6",
      amount: "N35,471",
      transactionId: "TR_8401857902",
      transactionType: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Failed",
    },
    {
      id: "2",
      amount: "N38,471",
      transactionId: "TR_8401857902",
      transactionType: "Transfer",
      date: "Feb 12, 2022",
      time: "10:30AM",
      status: "Processed",
    },
  ];

  const columns = [
    {
      name: (
        <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
      ),
      cell: (row) => (
        <input
          type="checkbox"
          onChange={() => handleCheckboxChange(row)}
          checked={selectedRows.includes(row.id)}
        />
      ),
      width: "50px",
    },
    {
      name: "AMOUNT",
      selector: (row) => row?.amount,
      sortable: true,
    },
    {
      name: "TRANSACTION ID",
      selector: (row) => row?.transactionId,
      sortable: true,
    },
    {
      name: "TRANSACTION TYPE",
      selector: (row) => row?.transactionType,
      sortable: true,
    },
    {
      name: "DATE",
      selector: (row) => row?.date,
      sortable: true,
    },
    {
      name: "TIME",
      selector: (row) => row?.time,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row?.status,
      sortable: true,
      cell: (row) => (
        <button
          className={`border px-3 py-2 rounded-[20px] flex justify-center items-center gap-2 w-28 ${
            row?.status === "Failed"
              ? "bg-[#fbecee] border-[#e26a73] text-[#8a4447]"
              : "bg-[#f1fcee] border-[#8fcaa7] text-[#3c5e2e]"
          }`}
        >
          <div
            className={`h-2 w-2 rounded-full ${
              row?.status === "Failed" ? "bg-[#de505b]" : "bg-[#a7ec8c]"
            }`}
          ></div>
          {row?.status}
        </button>
      ),
      width: "9rem",
    },
  ];

  return (
    <div className="w-full min-h-[700px] p-4 rounded">
      {!isMobile && (
        <div className="flex justify-between flex-wrap py-3">
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <div className="flex items-center gap-3">
                <select className="shadow-sm text-sm focus:outline-none cursor-pointer h-10 px-5 py-2.5 rounded">
                  <option value="" key="all-accounts">
                    All Accounts
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span>Select Date Range:</span>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(update: [Date | null, Date | null]) =>
                  setDateRange(update)
                }
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Select date range"
                dateFormat="MMM d, yyyy"
                className="border border-gray-300 px-4 py-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute top-2/4 right-3 transform -translate-y-2/4 pointer-events-none">
                <svg
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
                </svg>
              </div>
            </div>
            <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <Image
                src={uploadcloud}
                alt="uploadcloud"
                width={20}
                height={20}
              />
              Export
            </button>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <div className="flex justify-between flex-wrap py-3">
            {" "}
            <div className="relative">
              <div className="flex items-center gap-3">
                <select className="shadow-sm text-sm focus:outline-none cursor-pointer h-10 px-5 py-2.5 rounded">
                  <option value="" key="all-accounts">
                    All Accounts
                  </option>
                </select>
              </div>
            </div>
            <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
              <Image
                src={uploadcloud}
                alt="uploadcloud"
                width={20}
                height={20}
              />
              Export
            </button>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-[#71717A] text-base">Select Date Range:</div>
            <div className="relative">
              <DatePicker
                selected={startDate}
                onChange={(update: [Date | null, Date | null]) =>
                  setDateRange(update)
                }
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Select date range"
                dateFormat="MMM d, yyyy"
                className="border border-gray-300 px-4 py-2 rounded-md   w-36 focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#71717A]"
              />
              <div className="absolute top-2/4 right-3 transform -translate-y-2/4 pointer-events-none">
                <svg
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
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full bg-white p-4 mt-12 overflow-x-auto">
        {!isMobile && (
          <div className="flex flex-col">
            <Table
              columns={columns}
              data={data}
              className="border-stone-300 shadow-sm rounded-[6px]"
            />
          </div>
        )}

        {isMobile && (
          <div>
            {data.map((ele) => (
              <div className="border border-gray-300 px-4 rounded-md  items-center gap-2 w-full mt-5 py-4 text-[#252C32] ">
                <div className=" flex w-full border-b-[1px] border-gray-300 justify-between items-center py-3 ">
                  <div>AMOUNT:</div>
                  <div>{ele.amount}</div>{" "}
                </div>

                <div className=" flex w-full border-b-[1px] border-gray-300 justify-between items-center py-3">
                  <div className="text-[#252C32]">TRANSACTION TYPE:</div>
                  <div>{ele.transactionType}</div>{" "}
                </div>

                <div className=" flex w-full border-b-[1px] border-gray-300 justify-between items-center py-3">
                  <div>DATE:</div>
                  <div>{ele.date}</div>{" "}
                </div>

                <div className=" flex w-full border-b-[1px] border-gray-300 justify-between items-center py-3">
                  <div>SATUS:</div>
                  <button
                    className={`border px-3 py-2 rounded-[20px] flex justify-center items-center gap-2 w-28 py-3${
                      ele?.status === "Failed"
                        ? "bg-[#fbecee] border-[#e26a73] text-[#8a4447]"
                        : "bg-[#f1fcee] border-[#8fcaa7] text-[#3c5e2e]"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        ele?.status === "Failed"
                          ? "bg-[#de505b]"
                          : "bg-[#a7ec8c]"
                      }`}
                    ></div>
                    {ele?.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;

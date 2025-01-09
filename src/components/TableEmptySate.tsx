// import { PAIconTableEmptyState, PAIconUseradd } from "assets/images/svgs";
import React from "react";
import EmptyState from "../../public/svg/emptystate.svg";

import UserAdd from "../../public/svg/user-add.svg";
import Image from "next/image";

// import { useNavigate } from "react-router-dom";

interface TableEmptyStateProps {
  account?: boolean; // Optional boolean for account-specific styling
  dashboard?: boolean; // Optional boolean for dashboard-specific styling
  button?: boolean; // Optional boolean to show/hide button
  label?: string; // Optional label for the button
  path?: string; // Optional path for navigation
}

const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  account = false,
  dashboard = false,
  button = false,
  label = "",
  path = "",
}) => {
  //   const navigate = useNavigate();
  //   const handleNavigate = () => {
  //     if (path) {
  //       navigate(path);
  //     }
  //   };

  return (
    <div
      className={`w-full ${account ? "h-full" : "h-[500px]"} bg-white ${
        dashboard ? "rounded-b-[10px]" : "rounded-[10px]"
      } flex justify-center items-center`}
    >
      <div className="flex flex-col items-center">
        {/* <PAIconTableEmptyState /> */}
        <Image
          src={EmptyState}
          alt="emptystate"
          width={90}
          height={90}
          className=""
        />
        {button && (
          <button
            // neutral
            // onClick={handleNavigate}
            className="flex w-[157px] h-[44px] mt-[16px] border-[1px] border-gray rounded-[5px] justify-center items-center bg-primaryColor"
          >
            {/* <PAIconUseradd /> */}

            <Image
              src={UserAdd}
              alt="emptystate"
              width={40}
              height={40}
              className=""
            />

            <p className="text-sm font-normal text-white ml-[5px]">{label}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default TableEmptyState;

import { useState } from "react";
import { ICONS } from "../../../assets";

const DashboardSidebar = () => {
  const [collaps, setCollaps] = useState(false);
  return (
    <div
      className={`${
        collaps ? "w-[80px]" : "w-[218px]"
      } px-4 py-7 border-r h-screen flex flex-col justify-start items-center bg-primary-10`}
    >
      {/* ----- there is logo content ------------  */}
      <div
        className={`mb-7 flex justify-between items-start  ${
          collaps ? "flex-col gap-7" : "flex-row"
        }`}
      >
        <div className={`flex justify-center items-center gap-4`}>
          <img
            src={ICONS.logo}
            alt="abirami Enterprises logo"
            className="w-auto"
          />
          <p
            className={`text-white ${
              collaps ? "hidden" : "block"
            } text-[16px] leading-5`}
          >
            Abirami <br /> Enterprises
          </p>
        </div>
        <img
          onClick={() => setCollaps(!collaps)}
          src={ICONS.CollapsIcon}
          alt="CollapsIcon"
          className={`cursor-pointer ${collaps ? "rotate-180" : "rotate-0"}`}
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;

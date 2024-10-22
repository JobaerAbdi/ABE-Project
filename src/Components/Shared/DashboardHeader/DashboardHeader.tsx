import { useLocation } from "react-router-dom";
import { ICONS } from "../../../assets";

interface DashboardHeaderProps {
  HandleSidebar: (data: boolean) => void;
  callNav: boolean;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  HandleSidebar,
  callNav,
}) => {
  const location = useLocation();

  const currentPath =
    location.pathname === "/" ? "" : `/ ${location.pathname.substring(1)}`;

  return (
    <div className="bg-white mb-6 py-5  px-7 border-b flex justify-between items-center">
      <div className="text-gray-600 font-medium">
        {/* Conditional rendering based on screen size */}
        <span className="hidden lg:block">
          Dashboard <span className="text-black">{currentPath}</span>
        </span>
        <span className="hidden md:block lg:hidden">Dashboard</span>

        {/* Show sidebar toggle icon on small screens */}
        <span
          className="block md:hidden"
          onClick={() => HandleSidebar(!callNav)}
        >
          <img src={ICONS.ThreeLineIcon} alt="Menu Icon" />
        </span>
      </div>

      <div className="flex justify-center items-center gap-4">
        {/* Search bar with conditional display */}
        <div className="rounded-md p-1 px-2 bg-none md:bg-secondary-10 flex gap-2 justify-center items-center">
          <img src={ICONS.InputField} alt="Search Icon" />
          <input
            type="search"
            placeholder="Search"
            className="border-0 hidden md:block outline-0 md:w-[150px] lg:w-[350px] bg-transparent text-secondary-110 placeholder:text-secondary-110"
          />
        </div>
        {/* Notification bell icon */}
        <img src={ICONS.bell} alt="Notification Bell" />
      </div>
    </div>
  );
};

export default DashboardHeader;

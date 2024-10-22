import DashboardSidebar from "../Components/Shared/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../Components/Shared/DashboardHeader/DashboardHeader";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [callNav, setCallNav] = useState(false);

  const HandleSidebar = (data: boolean) => {
    setCallNav(data);
  };

  return (
    <div className="flex gap-7 w-full h-full">
      <DashboardSidebar HandleSidebar={HandleSidebar} callNav={callNav} />
      <div className="w-full px-4 pr-0 md:px-0 mr-7">
        <DashboardHeader HandleSidebar={HandleSidebar} callNav={callNav} />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;

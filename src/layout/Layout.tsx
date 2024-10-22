import DashboardSidebar from "../Components/Shared/DashboardSidebar/DashboardSidebar";
import DashboardHeader from "../Components/Shared/DashboardHeader/DashboardHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex gap-7 w-full h-full">
      <DashboardSidebar />
      <div className="w-full px-4 pr-0 md:px-0 md:pr-7">
        <DashboardHeader />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;

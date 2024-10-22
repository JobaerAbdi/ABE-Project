import { useState } from "react";
import { ICONS } from "../../../assets";
import { Link, NavLink } from "react-router-dom";

// Define the NavItem interface for the sidebar navigation items
interface NavItem {
  icon: string;
  text: string;
  path: string;
}

// Define the DashboardHeaderProps interface for the props passed to the component
interface DashboardHeaderProps {
  HandleSidebar: (data: boolean) => void; // Function to toggle sidebar visibility
  callNav: boolean; // State to check if the sidebar is currently visible
}

const DashboardSidebar: React.FC<DashboardHeaderProps> = ({
  HandleSidebar,
  callNav,
}) => {
  const [collaps, setCollaps] = useState(false); // State to control sidebar collapse
  const [activeItem, setActiveItem] = useState<number | null>(null); // State to track active dropdown items

  // Function to toggle active items (used for dropdowns)
  const toggleItem = (idx: number) => {
    setActiveItem(activeItem === idx ? null : idx);
  };

  // Define the navigation items for the sidebar
  const navItems: NavItem[] = [
    { icon: ICONS.DashboardIcon, text: "Dashboard", path: "/" },
    { icon: ICONS.ClientsIcon, text: "Clients", path: "/Clients" },
    { icon: ICONS.SuppliersIcon, text: "Suppliers", path: "/Suppliers" },
    { icon: ICONS.InvvoicesIcon, text: "Invoices", path: "/Invoices" },
    { icon: ICONS.InventoryIcon, text: "Inventory", path: "/Inventory" },
    { icon: ICONS.PurchasesIcon, text: "Purchase", path: "/Purchase" },
    { icon: ICONS.SettingsIcon, text: "Settings", path: "/Settings" },
  ];

  return (
    <div
      className={`${
        collaps ? "w-[80px]" : "min-w-[218px]" // Conditionally set width for collapsed sidebar
      } transition-all duration-300 ease-in-out px-4 absolute md:static ${
        callNav ? "left-0" : "-left-[100%]" // Handle visibility on mobile by toggling left position
      } py-7 border-r z-50 h-screen cursor-pointer flex flex-col justify-between items-center bg-primary-10`}
    >
      {/* Toggle sidebar visibility for mobile */}
      <span
        onClick={() => HandleSidebar(!callNav)}
        className="absolute top-2 right-2 block md:hidden"
      >
        <img src={ICONS.CrossIcon} alt="Close Sidebar Icon" />
      </span>

      {/* Sidebar content starts */}
      <div className="flex flex-col ">
        {/* Logo Section */}
        <div
          className={`mb-7 flex justify-between ${
            collaps ? "flex-col gap-7 items-center" : "flex-row items-start"
          }`}
        >
          {/* Logo and text */}
          <div className="flex justify-center items-center gap-4">
            <img
              src={ICONS.logo}
              alt="Abirami Enterprises logo"
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

          {/* Collapse button */}
          <img
            onClick={() => setCollaps(!collaps)} // Collapse or expand the sidebar
            src={ICONS.CollapsIcon}
            alt="Collapse Icon"
            className={`cursor-pointer ${collaps ? "rotate-180" : "rotate-0"}`} // Rotate icon based on collapse state
          />
        </div>

        {/* Navigation Items */}
        <div className="w-full">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleItem(idx)} // Toggle active item for dropdown functionality
              className={`w-full relative rounded-lg hover:bg-primary-20`} // Apply hover effect for items
            >
              <NavLink
                to={item.path} // Set the path for navigation
                className={`p-3 w-full gap-3 flex ${
                  item.text === "Suppliers" && activeItem === idx
                    ? "rounded-t-lg" // If the dropdown is active, round the top corners only
                    : "rounded-lg" // Otherwise, round the entire item
                } justify-between items-center`}
              >
                {/* Icon and text for each nav item */}
                <div className="flex justify-start items-center gap-4">
                  <img
                    src={item.icon}
                    alt={`${item.text} icon`}
                    className="w-auto"
                  />
                  <p className={`text-white ${collaps ? "hidden" : "block"}`}>
                    {item.text}
                  </p>
                </div>

                {/* Arrow icon for dropdown */}
                <img
                  src={ICONS.RightArrorwIcon}
                  alt="Arrow Icon"
                  className={`ml-3 ${
                    collaps ? "hidden" : "block rotate-transition"
                  } ${
                    item.text === "Suppliers" && activeItem === idx
                      ? "rotate-90" // Rotate arrow for active dropdown
                      : "rotate-0" // Default rotation for non-active items
                  }`}
                />
              </NavLink>

              {/* Dropdown for Suppliers section */}
              {item.text === "Suppliers" && activeItem === idx && (
                <div
                  className={`w-full flex rounded-b-lg flex-col bg-primary-20 ${
                    collaps
                      ? "absolute z-50 w-[200px] rounded-md overflow-hidden" // For collapsed view, display dropdown as floating
                      : ""
                  }`}
                >
                  {/* Dropdown options */}
                  <Link to="/Suppliers/CreateSupplier">
                    <button className="p-3 border-0 text-white w-full">
                      Create Supplier
                    </button>
                  </Link>
                  <Link to="/">
                    <button className="p-3 border-0 text-white w-full">
                      Option 2
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Admin Section */}
      <div
        className={`w-full flex cursor-pointer justify-between hover:bg-primary-20 p-3 rounded-md ${
          collaps ? "flex-col gap-2 items-center" : "flex-row items-start"
        }`}
      >
        {/* Admin icon and label */}
        <div className="flex justify-center items-center gap-4">
          <img src={ICONS.Admin} alt="Admin Icon" className="w-auto" />
          <p
            className={`text-white ${
              collaps ? "hidden" : "block"
            } text-[16px] leading-5`}
          >
            Admin
          </p>
        </div>
        <img
          onClick={() => setCollaps(!collaps)} // Toggle collapse/expand on click
          src={ICONS.RightArrorwIcon}
          alt="Arrow Icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;

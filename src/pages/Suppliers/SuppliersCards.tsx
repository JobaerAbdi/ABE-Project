import { ICONS } from "../../assets";
import DeshboardButton from "../../Components/Shared/Button/Button";
import StatusCard from "../../Components/Shared/StatusCard/StatusCard";

export default function SuppliersCards() {
  return (
    <div className="w-full ">
      <div className="w-full px-4 py-2 mb-2 flex justify-between items-center">
        <h3 className="font-bold">Supplier list page</h3>
        <DeshboardButton
          text="Create Supplier"
          imgSrc={ICONS.Button}
          color="bg-secondary-120 text-primary-20"
          iconClassName="text-white"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatusCard
          cardBg="bg-secondary-10"
          iconBg="bg-secondary-65"
          title="Total Suppliers"
          value="7,265"
          icon={ICONS.SupplierIcon2}
        />
        <StatusCard
          cardBg="bg-secondary-20"
          iconBg="bg-secondary-75"
          title="Active Suppliers"
          value="17,265"
          icon={ICONS.SupplierIcon1}
        />
        <StatusCard
          cardBg="bg-secondary-40"
          iconBg="bg-secondary-85"
          title="Active Suppliers"
          value="5"
          icon={ICONS.SupplierIcon3}
        />
      </div>
    </div>
  );
}

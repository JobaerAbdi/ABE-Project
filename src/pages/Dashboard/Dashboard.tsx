import { ICONS } from "../../assets";
import DeshboardButton from "../../Components/Shared/Button/Button";
import InputField from "../../Components/Shared/InputField/InputField";
// import InputField from "../../Components/Shared/InputField/InputField";
import StatusCard from "../../Components/Shared/StatusCard/StatusCard";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          cardBg="bg-secondary-10"
          iconBg="bg-secondary-65"
          title="Invoices"
          value="7265"
          icon={ICONS.invoices}
        />

        <StatusCard
          cardBg="bg-secondary-20"
          iconBg="bg-secondary-70"
          title="Paid Invoice"
          value="17256"
          icon={ICONS.paidInvoices}
        />
        <StatusCard
          cardBg="bg-secondary-35"
          iconBg="bg-secondary-75"
          title="Pending Invoices"
          value="5"
          icon={ICONS.pendingInvoice}
        />
        <StatusCard
          cardBg="bg-secondary-80"
          iconBg="bg-secondary-85"
          title="Income Received"
          value="89,27,265.00"
          icon={ICONS.incomeReceived}
        />
        <StatusCard
          cardBg="bg-secondary-95"
          iconBg="bg-secondary-90"
          title="Invoices this Month"
          value="600"
          icon={ICONS.invoiceMonth}
        />
        <StatusCard
          cardBg="bg-secondary-105"
          iconBg="bg-secondary-100"
          title="Sales this Month"
          value="89,27,265.00"
          icon={ICONS.salesMonth}
        />
        <StatusCard
          cardBg="bg-secondary-55"
          iconBg="bg-secondary-110"
          title="Purchase this Month"
          value="9,27,265.00"
          icon={ICONS.purchaseMonth}
        />
        <StatusCard
          cardBg="bg-secondary-60"
          iconBg="bg-secondary-115"
          title="Total purchase this Month"
          value="1,99,27,265.00"
          icon={ICONS.totalPurchase}
        />
      </div>
      Input field
      <div>
        <InputField
          label="Input Lavel"
          required={true}
          inputBg="bg-gray-100"
          placeholder="Enter Input Value"
          iconBg="bg-white"
          type="text"
          icon={ICONS.InputField}
        />
      </div>
      <DeshboardButton
        text="Click Me"
        imgSrc={ICONS.paidInvoices}
        color="bg-primary-10 "
        iconClassName="w-5 h-5"
        onClick={() => alert("Button clicked!")}
      />
    </>
  );
};

export default Dashboard;

import DashboardLayout from "@/components/layouts/dashboard-layout";
import Image from "next/image";
import column_visibility_icon from "@/public/assets/icons/column_visibility_icon.svg";
import export_to_csv_icon from "@/public/assets/icons/export_to_csv_icon.svg";
import export_to_excel_icon from "@/public/assets/icons/export_to_excel_icon.svg";
import print_icon from "@/public/assets/icons/print_icon.svg";
import export_to_pdf_icon from "@/public/assets/icons/export_to_pdf_icon.svg";
import Searchbar from "@/components/ui/search-bar";
import ListStockAdjustmentTable from "@/components/pages/stock-adjustment/list-stock-adjustment/list-stock-adjustment-table";

const ListStockAdjustment = () => {
  return (
    <DashboardLayout className="w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-[36px] font-medium">List Stock Adjustments</h1>
        <div className="bg-gradient-to-r from-[#2CCE8A] to-[#1B9AA9] h-1" />
        <div className="flex flex-col gap-6">
          <span className="flex justify-between items-center">
            <h2 className="text-lg">List Stock Adjustments</h2>
            <button className="bg-[#1472E8] p-2 px-3 w-max text-white font-semibold">
              + Add
            </button>
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="flex gap-1 items-center">
              <p className="text-sm">Show</p>{" "}
              <select
                className="form-control border border-[#D2D6DE] p-1"
                id="business_location"
              >
                <option value="">5</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
                <option value="">25</option>
              </select>
              <p className="text-sm">entries</p>
            </span>
            <div className="flex items-center">
              <span className="flex items-center gap-1 p-1 cursor-pointer bg-[#EAEAEA] border border-[#D2D6DE]">
                <Image src={column_visibility_icon} alt="" />
                <p className="text-xs">Column Visibility</p>
              </span>
              <span className="flex items-center gap-1 p-1 cursor-pointer bg-[#EAEAEA] border border-[#D2D6DE]">
                <Image src={export_to_csv_icon} alt="" />
                <p className="text-xs">Export to CSV</p>
              </span>
              <span className="flex items-center gap-1 p-1 cursor-pointer bg-[#EAEAEA] border border-[#D2D6DE]">
                <Image src={export_to_excel_icon} alt="" />
                <p className="text-xs">Export to Excel</p>
              </span>
              <span className="flex items-center gap-1 p-1 cursor-pointer bg-[#EAEAEA] border border-[#D2D6DE]">
                <Image src={print_icon} alt="" />
                <p className="text-xs">Print</p>
              </span>
              <span className="flex items-center gap-1 p-1 cursor-pointer bg-[#EAEAEA] border border-[#D2D6DE]">
                <Image src={export_to_pdf_icon} alt="" />
                <p className="text-xs">Export to PDF</p>
              </span>
            </div>
            <Searchbar />
          </div>
          <ListStockAdjustmentTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ListStockAdjustment;

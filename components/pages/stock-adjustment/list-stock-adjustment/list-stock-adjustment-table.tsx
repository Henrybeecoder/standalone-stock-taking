"use client";
import reverse_arrows from "@/public/assets/icons/reverse_arrrows.svg";
import eye_open_icon from "@/public/assets/icons/eye_open_icon.svg";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContextProvider";

const ListStockAdjustmentTable = () => {
  const { setShowModal } = useModal();
  return (
    <div className="w-full overflow-x-auto">
      <table className="text-sm table-auto w-full border border-[#F4F4F4]">
        <thead className="bg-white ">
          <tr>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Action
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              <div className="flex items-center justify-end gap-1">
                Date
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Reference No
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Location
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Adjustment Type
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Table Amount
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Total Amount Recovered
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Reason
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
            <th className="border-4 border-[#F4F4F4] px-4 py-2 text-left">
              <div className="flex items-center gap-1">
                Added By
                <Image src={reverse_arrows} alt="arrows" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="odd:bg-gray-50 even:bg-white cursor-pointer"
            onClick={() => setShowModal("stock-adjustment-details")}
          >
            <td className="border-4 border-[#F4F4F4] px-4 py-2 flex flex-col items-start">
              <button className="bg-[#1472E8] p-2 px-3 w-max text-white font-semibold text-sm flex items-center gap-1">
                <Image src={eye_open_icon} alt="eye-icon" />
                View
              </button>
              {/* <button className="bg-[#EC3B65] p-2 px-3 w-max text-white font-semibold text-sm flex items-center gap-1">
                <Image src={delete_icon} alt="delete-icon" />
                Delete
              </button> */}
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2">
              12/16/2024 09:03
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              SA2024/0016
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              Kentwood
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              Normal
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              # 18 009.00
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              # 0.00
            </td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right"></td>
            <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
              Clark Kent
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListStockAdjustmentTable;

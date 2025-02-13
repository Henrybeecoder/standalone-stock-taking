"use client";
import reverse_arrows from "@/public/assets/icons/reverse_arrrows.svg";
import eye_open_icon from "@/public/assets/icons/eye_open_icon.svg";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContextProvider";
import { GetStockTakingResponse } from "@/types";
import { Format } from "@/utils/format.util";

interface ListStockAdjustmentTableProps {
  data?: GetStockTakingResponse[];
  isPending: boolean;
}

const ListStockAdjustmentTable: React.FC<ListStockAdjustmentTableProps> = ({
  data,
  isPending,
}) => {
  const { setShowModal, setModalPayload } = useModal();
  console.log(isPending);
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
                Sub Total
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
          {data &&
            data?.map((item, index) => (
              <tr className="odd:bg-gray-50 even:bg-white " key={index}>
                <td className="border-4 border-[#F4F4F4] px-4 py-2 flex flex-col items-start">
                  <button
                    onClick={() => {
                      setShowModal("stock-adjustment-details");
                      setModalPayload(item);
                    }}
                    className="bg-[#1472E8] p-2 px-3 w-max text-white font-semibold text-sm flex items-center gap-1"
                  >
                    <Image src={eye_open_icon} alt="eye-icon" />
                    View
                  </button>
                </td>
                <td className="border-4 border-[#F4F4F4] px-4 py-2">
                  {item &&
                    Format.dateTime(item?.date_taken).date +
                      " " +
                      Format.dateTime(item?.date_taken).time}
                </td>
                <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
                  {item?.ref_no || "N/A"}
                </td>
                <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
                  {item.location.name}
                </td>
                <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
                  {item.adjustment_type ?? "N/A"}
                </td>
                <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
                  {item.items[index]?.product.selling_price ?? "N/A"}
                </td>

                <td className="border-4 border-[#F4F4F4] px-4 py-2 text-right">
                  {item.created_by.first_name ?? "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListStockAdjustmentTable;

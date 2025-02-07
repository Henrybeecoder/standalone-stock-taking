"use client";
import {
  Modal as ModalLayout,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useModal } from "@/contexts/ModalContextProvider";
import React from "react";
import print_icon from "@/public/assets/icons/print_white_icon.svg";
import Image from "next/image";

const StockAdjustmentDetailsModal = () => {
  const { showModal, setShowModal } = useModal();
  return (
    <ModalLayout
      isOpen={showModal === "stock-adjustment-details"}
      onClose={() => setShowModal("")}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent
        textColor={"black"}
        marginX={"16px"}
        maxWidth={"743px"}
        width={"85%"}
        // padding={"5px"}
        // paddingTop={"24px"}
        backgroundColor={"white"}
        borderRadius="0"
      >
        {/* <ModalCloseButton
          color={"#151515"}
          border={"transparent"}
          //   marginTop={"20px"}
          //   marginRight={"20px"}
        /> */}
        <ModalHeader>
          Stock adjustment details (Reference No: #SA2024/0016)
        </ModalHeader>

        <ModalBody
          className="flex flex-col gap-3 text-sm rounded-none"
          rounded={"0px"}
        >
          <div className="flex items-start justify-between">
            <span className="flex flex-col">
              <h2 className="font-semibold">Business:</h2>
              <p className="w-1/2">
                Kentwood Kentwood Oba Palace Ikorodu, Lagos, Nigeria Mobile:
                09076453423
              </p>
            </span>
            <span className="flex flex-col">
              <p>
                <span className="font-semibold">Reference No:</span>{" "}
                #SA2024/0016
              </p>
              <p>
                <span className="font-semibold">Date:</span> 12/16/2024
              </p>
              <p>
                <span className="font-semibold">Adjustment type:</span> Normal
              </p>
              <p>
                <span className="font-semibold">Reason:</span>
              </p>
            </span>
            <span>
              <p>
                <span className="font-semibold">Date:</span> 12/16/2024
              </p>
            </span>
          </div>
          <table className="text-sm table-auto w-full border border-[#F4F4F4]">
            <thead className="bg-[#36CF89] text-white">
              <tr>
                <th className="p-2 text-left ">Product</th>
                <th className="p- text-left ">Lot & Expiry</th>
                <th className="p-2 text-left ">Quantity</th>
                <th className="p-2 text-left ">Unit</th>
                <th className="p-2 text-left ">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-[#D3D5E1]">
              <tr className="">
                <td className="p-2">23G NEEDLES (109748)</td>
                <td className="p-2">--</td>
                <td className="p-2">9.00</td>
                <td className="p-2">2001.00</td>
                <td className="p-2">18.009.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="">
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2 font-bold">Total Amount</td>
                <td className="p-2"></td>
                <td className="p-2"># 18.009.00 </td>
              </tr>
              <tr className="">
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2 font-bold">Total Amount Received</td>
                <td className="p-2"></td>
                <td className="p-2"># 0.00</td>
              </tr>
            </tfoot>
          </table>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Activities:</p>
            <div className="flex items-center gap-2 justify-between">
              <span className="flex flex-col gap-2">
                <p className="font-bold">Date</p>
                <p>12/16/2024 09:04 AM</p>
              </span>
              <span className="flex flex-col gap-2">
                <p className="font-bold">Action</p>
                <p>Added</p>
              </span>
              <span className="flex flex-col gap-2">
                <p className="font-bold">By</p>
                <p>Clark Kent</p>
              </span>
              <span className="flex flex-col gap-2">
                <p className="font-bold">Note</p>
                <p></p>
              </span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="flex items-end gap-2">
          <button className="bg-[#1472E8] p-2 px-3 w-max text-white font-semibold flex items-center gap-2">
            <Image src={print_icon} alt="print icon" />
            Print
          </button>
          <button
            className="bg-[#F4F4F4] text-[#282828] p-2 px-3 w-max font-semibold flex items-center gap-1"
            onClick={() => setShowModal("")}
            type="button"
          >
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalLayout>
  );
};

export default StockAdjustmentDetailsModal;

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

const NoProductsModal = () => {
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
          <p>No matching Product Found!</p>
        </ModalBody>
        <ModalFooter className="flex items-end gap-2">
          <button className="bg-[#7CD1FA] p-2 px-3 w-max text-white font-semibold flex items-center gap-2">
            <Image src={print_icon} alt="print icon" />
            OK
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalLayout>
  );
};

export default NoProductsModal;

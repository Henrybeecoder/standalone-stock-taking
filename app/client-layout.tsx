"use client";
import StockAdjustmentDetailsModal from "@/components/pages/stock-adjustment/list-stock-adjustment/stock-adjustment-details-modal";
import { useModal } from "@/contexts/ModalContextProvider";
// import { ThirdwebProvider } from "@thirdweb-dev/react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { showModal } = useModal();
  return (
    <>
      {showModal === "stock-adjustment-details" && (
        <StockAdjustmentDetailsModal />
      )}
      <div>{children}</div>
    </>
  );
};

export default ClientLayout;

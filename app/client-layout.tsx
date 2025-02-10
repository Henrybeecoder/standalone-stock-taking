"use client";
import Loader from "@/components/globals/loader";
import StockAdjustmentDetailsModal from "@/components/pages/stock-adjustment/list-stock-adjustment/stock-adjustment-details-modal";
import { useModal } from "@/contexts/ModalContextProvider";
import { useUserAuth } from "@/contexts/UserAuthContext";
// import { ThirdwebProvider } from "@thirdweb-dev/react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const { showModal } = useModal();
  const { isLoading } = useUserAuth();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {showModal === "stock-adjustment-details" && (
            <StockAdjustmentDetailsModal />
          )}
          <div>{children}</div>
        </>
      )}
    </>
  );
};

export default ClientLayout;

"use client";
import { ApiRequest } from "@/utils/apiRequest.util";
import { ApiUrl } from "@/utils/apiUrl.util";
import Cookies from "js-cookie";
import { GetStockTakingResponse, Product } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { StockTakingRequest } from "@/app/stock-adjustment/stock-taking/page";

interface StockTakingTableProps {
  products: Product[];
  // selectedProducts: number[];
  // onProductChange: (productId: number) => void;
  setFormData: Dispatch<SetStateAction<StockTakingRequest>>;
}

const StockTakingTable: React.FC<StockTakingTableProps> = ({
  products,
  // selectedProducts,
  // onProductChange,
  setFormData,
}) => {
  const token = Cookies.get("token");
  const [increaseQty, setIncreaseQty] = useState<{ [key: number]: number }>({});
  const [reduceQty, setReduceQty] = useState<{ [key: number]: number }>({});
  // const [stockAdjustmentData, setStockAdjustmentData] = useState<
  //   GetStockTakingResponse[] | undefined
  // >(undefined);
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const {
    data,
  }: // isPending,
  UseQueryResult<{ data: GetStockTakingResponse[] }, Error> = useQuery({
    queryKey: ["getStockAdjustments"],
    queryFn: async () => {
      const response = await ApiRequest.get(ApiUrl.getStockAdjustments, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    },
  });

  const handleQuantityChange = (
    productId: number,
    type: "increase" | "reduce",
    value: number
  ) => {
    if (type === "increase") {
      setIncreaseQty((prev) => ({ ...prev, [productId]: value }));
    } else {
      setReduceQty((prev) => ({ ...prev, [productId]: value }));
    }

    const productData = data?.data.find(
      (item) => item.items[0].product.id === productId
    );

    if (
      productData &&
      (productData.items[0].current_quantity !== value ||
        productData.items[0].current_quantity !== value)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        products: [
          ...prevData.products.filter((p) => p.id !== productId),
          {
            id: productId,
            variation_id: productData.items[0].product.product_variations[0].id,
            quantity:
              type === "increase"
                ? productData.items[0].current_quantity + value
                : productData.items[0].current_quantity - value,
          },
        ],
      }));
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full text-sm">
        <thead className="bg-white">
          <tr>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              Product Name
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-right">
              SKU
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              Current QTY
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              Increase QTY
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              Reduce QTY
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              New QTY
            </th>
            <th className="border-4 border-l-0 border-[#F6F6F6] px-4 py-2 text-left">
              Unit Cost Price
            </th>
            <th className="border-4 border-r-0 border-[#F6F6F6] px-4 py-2 text-left">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const currentQty = Number(product.alert_quantity) ?? 0;
            const newQty =
              currentQty +
              (increaseQty[product.id] || 0) -
              (reduceQty[product.id] || 0);
            return (
              <tr className="odd:bg-gray-50 even:bg-white" key={index}>
                <td className="border-4 border-[#F6F6F6] px-4 py-2">
                  {product.name ?? "--"}
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2">
                  {product.sku ?? "--"}
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  {currentQty}
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  <input
                    type="number"
                    className="border border-[#D2D6DE] p-1"
                    name="increase_qty"
                    value={increaseQty[product.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.id,
                        "increase",
                        Number(e.target.value)
                      )
                    }
                  />
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  <input
                    type="number"
                    className="border border-[#D2D6DE] p-1"
                    name="reduce_qty"
                    value={reduceQty[product.id] || ""}
                    onChange={(e) =>
                      handleQuantityChange(
                        product.id,
                        "reduce",
                        Number(e.target.value)
                      )
                    }
                  />
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  {newQty}
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  {product?.product_variations[0]?.variations[0]
                    ?.default_sell_price &&
                    (product?.product_variations[0]?.variations[0]?.default_sell_price.split(
                      "."
                    )[0] ??
                      "N/A")}
                </td>
                <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                  N/A
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-[#F6F6F6] w-full h-10"></div>
      <div className="bg-white w-full p-4"></div>
    </div>
  );
};

export default StockTakingTable;

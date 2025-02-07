"use client";

import { Product } from "@/types";

interface StockTakingTableProps {
  products: Product[];
}

const StockTakingTable: React.FC<StockTakingTableProps> = ({ products }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border-">
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
          <tr className="odd:bg-gray-50 even:bg-white">
            <td className="border-4 border-[#F6F6F6] px-4 py-2">
              <input
                placeholder="Search a product..."
                className="bg-gray-50 focus:outline-none"
              />
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2">...</td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
            <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
              ...
            </td>
          </tr>
          {products.map((product, index) => (
            <tr className="odd:bg-gray-50 even:bg-white" key={index}>
              <td className="border-4 border-[#F6F6F6] px-4 py-2">
                {product.name ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2">
                {product.sku ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.alert_quantity ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.alert_quantity ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.alert_quantity ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.alert_quantity ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.purchase_price ?? "--"}
              </td>
              <td className="border-4 border-[#F6F6F6] px-4 py-2 text-right">
                {product.name}
              </td>
            </tr>
          ))}
        </tbody>
        {/* <tfoot className="bg-white w-full">
          <tr className="w-full bg-white">
            <th className="px-4 py-2 text-left">
              Showing 1 to 10 of 50 entries
            </th>
          </tr>
        </tfoot> */}
      </table>
      <div className="bg-[#F6F6F6] w-full h-10"></div>
      <div className="bg-white w-full p-4">
        <p className="text-sm py-5">Showing 1 to 10 of 50 entries</p>
      </div>
    </div>
  );
};

export default StockTakingTable;

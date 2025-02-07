"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import StockTakingTable from "@/components/pages/stock-adjustment/stock-taking/stock-taking-table";
import { BusinessLocation, Product } from "@/types";
import { ApiRequest } from "@/utils/apiRequest.util";
import { ApiUrl } from "@/utils/apiUrl.util";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";

const StockTaking = () => {
  const token = Cookies.get("token");
  console.log("token", token);

  const {
    data: businessLocations,
  }: UseQueryResult<{ data: BusinessLocation[] }, unknown> = useQuery({
    queryKey: ["get business location"],
    queryFn: async () => {
      const response = await ApiRequest.get(ApiUrl.getBusinessLocations, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    },
  });

  const { data: products }: UseQueryResult<{ data: Product[] }, unknown> =
    useQuery({
      queryKey: ["get products"],
      queryFn: async () => {
        const response = await ApiRequest.get(ApiUrl.getProducts, {
          Authorization: `Bearer ${token}`,
        });
        return response.data;
      },
    });

  console.log("products", products);

  useMutation({
    mutationFn: async () => {
      await ApiRequest.post(ApiUrl.stockTaking, {});
    },
  });

  return (
    <DashboardLayout className="w-full">
      <h1 className="text-[36px] font-medium">Add Stock Taking</h1>
      <div className="flex flex-col gap-[39px] items-center w-full">
        <div className="bg-white rounded p-5 px-4 grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3 place-items-start w-full">
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F]">Business Location:</p>
            <select
              className="form-control border border-[#D2D6DE] p-1"
              id="business_location"
            >
              {businessLocations &&
                businessLocations.data?.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
            </select>
          </span>
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F] D2D6DE">Reference No:</p>
            <input type="text" className="border border-[#D2D6DE] p-1" />
          </span>
          <input
            type="text"
            placeholder="search products"
            className="border border-[#D2D6DE] p-1 w-full rounded-md mt-7"
          />
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F]">Date:</p>
            <input type="date" className="border border-[#D2D6DE] p-1" />
          </span>
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F] ">Adjustment Type:*</p>
            <select
              className="form-control border border-[#D2D6DE] p-1 w-full"
              id="business_location"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </span>
        </div>
        {/* <div className="bg-white rounded p-5 px-4"></div> */}
        {products && <StockTakingTable products={products.data} />}
        <div className="w-full flex justify-end gap-2">
          <button className="text-sm bg-[#1472E8] p-2 px-3 w-max text-white font-semibold">
            Save
          </button>
          <button className="text-sm bg-[#F4F4F4] p-2 px-3 w-max text-black font-semibold">
            Save as Draft
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StockTaking;

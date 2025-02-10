"use client";

import DashboardLayout from "@/components/layouts/dashboard-layout";
import StockTakingTable from "@/components/pages/stock-adjustment/stock-taking/stock-taking-table";
import { BusinessLocation, Product } from "@/types";
import { ApiRequest } from "@/utils/apiRequest.util";
import { ApiUrl } from "@/utils/apiUrl.util";
import { handleOnChange } from "@/utils/handleOnChange.util";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { FormEvent, useState } from "react";

type StockTakingRequest = {
  location_id: number | undefined;
  ref_no: string;
  date: string;
  adjustment_type: string;
  products: {
    id: number | undefined;
    variation_id: number | undefined;
    quantity: number | undefined;
  }[];
};

const StockTaking = () => {
  const token = Cookies.get("token");

  const toast = useToast();

  const [formData, setFormData] = useState<StockTakingRequest>({
    location_id: undefined,
    ref_no: "",
    date: "",
    adjustment_type: "",
    products: [],
  });

  const allFieldsArePopulated = () => {
    const { location_id, ref_no, date, adjustment_type, products } = formData;
    return (
      location_id !== undefined &&
      ref_no.trim() !== "" &&
      date.trim() !== "" &&
      adjustment_type.trim() !== "" &&
      products.length > 0
    );
  };

  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleProductSelect = (productId: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const handleSelectAll = () => {
    if (products && selectedProducts.length === products.data.length) {
      setSelectedProducts([]);
    } else if (products) {
      setSelectedProducts(products.data.map((product) => product.id));
    }
  };

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

  const filteredProducts =
    products?.data.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  console.log("products", products);

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await ApiRequest.post(
        ApiUrl.stockTaking,
        { formData },
        { Authorization: `Bearer ${token}` }
      );
      return response.data;
    },
    onSuccess: () => {
      toast({
        status: "success",
        description: "Stock taking successful",
        position: "top",
        isClosable: true,
      });
    },
    onError: (error: any) => {
      const errorMessage = error.response.data.message;
      toast({
        status: "error",
        description:
          errorMessage ?? "An error occured while processing stock taking",
        position: "top",
        isClosable: true,
      });
    },
  });

  const handleSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (allFieldsArePopulated()) {
      mutate();
    } else {
      toast({
        status: "error",
        description: "Please fill in all required fields.",
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <DashboardLayout className="w-full">
      <h1 className="text-[36px] font-medium">Add Stock Taking</h1>
      <form
        onSubmit={handleSave}
        className="flex flex-col gap-[39px] items-center w-full"
      >
        <div className="bg-white rounded p-5 px-4 grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3 place-items-start w-full">
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F]">Business Location:</p>
            <select
              className="form-control border border-[#D2D6DE] p-1"
              id="business_location"
              name="location_id"
              onChange={(e) => handleOnChange(e, "object", setFormData)}
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
            <input
              type="text"
              className="border border-[#D2D6DE] p-1"
              name="reference_id"
              onChange={(e) => handleOnChange(e, "object", setFormData)}
            />
          </span>
          <input
            type="text"
            placeholder="search products"
            className="border border-[#D2D6DE] p-1 w-full rounded-md mt-7"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F]">Date:</p>
            <input
              type="date"
              className="border border-[#D2D6DE] p-1"
              name="date"
              onChange={(e) => handleOnChange(e, "object", setFormData)}
            />
          </span>
          <span className="flex flex-col gap-1">
            <p className="text-[#535F7F] ">Adjustment Type:*</p>
            <select
              className="form-control border border-[#D2D6DE] p-1 w-full"
              id="adjustment_type"
              name="adjustment_type"
              onChange={(e) => handleOnChange(e, "object", setFormData)}
            >
              <option value="normal">Normal</option>
              {/* <option value="">2</option>
              <option value="">3</option> */}
            </select>
          </span>
        </div>
        {/* <div className="bg-white rounded p-5 px-4"></div> */}
        {products && (!products.data || products.data.length === 0) ? (
          <p className="font-bold text-lg">No products found</p>
        ) : (
          <StockTakingTable
            products={filteredProducts}
            selectedProducts={selectedProducts}
            onProductSelect={handleProductSelect}
            onSelectAll={handleSelectAll}
          />
        )}
        <div className="w-full flex justify-end gap-2">
          <button
            type="submit"
            className="text-sm bg-[#1472E8] p-2 px-3 w-max text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!allFieldsArePopulated()}
          >
            {isPending ? "Saving..." : "Save"}
          </button>
          <button className="text-sm bg-[#F4F4F4] p-2 px-3 w-max text-black font-semibold">
            Save as Draft
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default StockTaking;

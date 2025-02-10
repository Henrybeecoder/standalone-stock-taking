"use client";
import { ApiRequest } from "@/utils/apiRequest.util";
import { ApiUrl } from "@/utils/apiUrl.util";
import { handleOnChange } from "@/utils/handleOnChange.util";
import { Spinner, useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  console.log("formData", formData);
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const body = {
        grant_type: "password",
        client_id: ApiUrl.clientID,
        client_secret: ApiUrl.clientSecret,
        username: formData.username,
        password: formData.password,
      };
      const response = await ApiRequest.post(ApiUrl.login, body);
      return response.data;
    },
    onSuccess: (data: { access_token: string }) => {
      console.log(data);
      const token = data.access_token;
      Cookies.set("token", token, { secure: true, sameSite: "strict" });
      toast({
        status: "success",
        description: "Login successful",
        position: "top",
        isClosable: true,
      });
      router.push("/stock-adjustment/stock-taking");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast({
          status: "error",
          description: error.message,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          status: "error",
          description: "An unexpected error occurred.",
          position: "top",
          isClosable: true,
        });
      }
    },
  });

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    mutate();
  }
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-start justify-center gap-4 md:w-1/2 w-full p-5 m-10"
      >
        <h1 className="font-bold text-3xl">Login to continue</h1>
        <span className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-sm">
            Username
          </label>
          <input
            placeholder="Enter username"
            name="username"
            onChange={(e) => handleOnChange(e, "object", setFormData)}
            className="border border-black/20 w-full p-2"
          />
        </span>
        <span className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-sm">
            Password
          </label>
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            onChange={(e) => handleOnChange(e, "object", setFormData)}
            className="border border-black/30 w-full p-2"
          />
        </span>
        <button
          type="submit"
          className="text-sm bg-[#1472E8] p-2 px-3 text-white font-semibold w-full"
        >
          {" "}
          {isPending ? <Spinner /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

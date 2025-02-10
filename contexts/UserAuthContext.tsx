"use client";
import { LocalStorage } from "@/utils/localStorage.util";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

interface UserContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserAuthContext = createContext<UserContextProps | undefined>(undefined);
const UserAuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  function checkIfUserIsLoggedIn() {
    // || !LocalStorage.get("user")
    if (!Cookies.get("token")) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return false;
    }
    setIsLoggedIn(true);
    setIsLoading(false);
    return true;
  }

  useEffect(() => {
    const userIsLoggedIn = checkIfUserIsLoggedIn();
    if (!userIsLoggedIn) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    checkIfUserIsLoggedIn();
  });

  return (
    <UserAuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isLoading, setIsLoading }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within UserAuthProvider");
  }
  return context;
};

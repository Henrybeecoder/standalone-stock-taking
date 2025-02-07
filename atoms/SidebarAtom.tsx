"use client";
import { atom, useAtom } from "jotai";

export const sidebarIsOpenAtom = atom<boolean>(true);

export default function useSidebar(): [boolean, (update: boolean) => void] {
  const [sidebarIsOpen, setSidebarIsOpen] = useAtom(sidebarIsOpenAtom);
  return [sidebarIsOpen, setSidebarIsOpen];
}

import { MusicAttributes } from "@/app/page";
import { atom } from "recoil";

export const displaySidebarState = atom<boolean>({
  key: "displaySidebarState",
  default: true,
});

import { MusicAttributes } from "@/app/page";
import { atom } from "recoil";

export const historyState = atom<MusicAttributes[] | null>({
  key: "historyState",
  default: null,
});

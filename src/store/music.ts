import { MusicAttributes } from "@/app/page";
import { atom } from "recoil";

export const musicState = atom<MusicAttributes | null>({
  key: "musicState",
  default: null,
});

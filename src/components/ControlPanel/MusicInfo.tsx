"use client"
import { musicState } from "@/store/music";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

export const MusicInfo: React.FC = () => {
  const [music, setMusic] = useRecoilState(musicState);
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  return (
    music&&<div className="text-white  h-[100px]  flex items-center justify-start ">
      <div className="w-[45%] flex flex-row items-center gap-[16px] ">
        <div className="flex flex-col items-start w-[60%] h-[70px] gap-[8px] ">
          {" "}
          <h1 className="text-md font-thin line-clamp-2 text-zinc-200">
            {music?.name!}
          </h1>
          <h1 className="text-xs font-thin line-clamp-2 text-zinc-400">
            {music?.artists[0].name}
          </h1>
        </div>
        <div className="flex items-start justify-center w-[40%] gap-[4px] h-[70px] ">
          <button className="hover:bg-[#282828] p-2 w-28 rounded-full" onClick={() => setLiked(!liked)}>
            {!liked && (
              <Image
                alt="heart-white"
                width={24}
                height={24}
                src={"/heart-white.svg"}
              />
            )}
            {liked && (
              <Image
                alt="heart-color"
                width={24}
                height={24}
                src={"/heart-color.svg"}
              />
            )}
          </button>
          <button className="hover:bg-[#282828] p-2 w-28 rounded-full" onClick={() => setAdded(!added)}>
            {!added && (
              <Image
                alt="heart-white"
                width={24}
                height={24}
                src={"/add.svg"}
              />
            )}
            {added && (
              <Image
                alt="heart-color"
                width={24}
                height={24}
                src={"/remove.svg"}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

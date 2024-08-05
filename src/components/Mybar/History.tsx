"use client";
import { MusicAttributes } from "@/app/page";
import { historyState } from "@/store/history";
import { musicState } from "@/store/music";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const History: React.FC = () => {
  const [music, setMusic] = useRecoilState(musicState);
  const [history, setHistory] = useRecoilState(historyState);

  const recentlyPlayed = history ? [...history].reverse() : [];

  const handleClick = (item: MusicAttributes) => {
    setMusic({
      name: item.name,
      images: item.images,
      artists: item.artists,
    });
    setHistory((prev) => [
      ...(prev || []),
      {
        name: item.name,
        images: item.images,
        artists: item.artists,
      },
    ]);
  };

  return (
    <div className="w-full">
      <h1 className="text-xl text-white text-left w-full ">Recently played</h1>
      <div className="h-[420px] overflow-y-scroll custom-scrollbar px-[12px]">
        {recentlyPlayed?.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(item)}
              key={index}
              className="text-white  h-[70px] flex items-center justify-start gap-[16px] hover:bg-[#282828] px-[8px] rounded-[8px] cursor-pointer"
            >
              <Image
                alt="img"
                width={48}
                height={48}
                src={item.images[0].url}
                className="rounded-[4px]"
              />
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-sm text-zinc-200 line-clamp-1">{item.name}</h1>
                <h1 className="text-xs text-zinc-400 line-clamp-1">
                  {item.artists[0].name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

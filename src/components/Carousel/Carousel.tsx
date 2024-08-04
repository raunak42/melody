"use client";
import { MusicAttributes } from "@/app/page";
import { historyState } from "@/store/history";
import { musicState } from "@/store/music";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";

interface CarouselProps {
  carouselItems: MusicAttributes[];
}

export const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const [music, setMusic] = useRecoilState(musicState);
  const [history, setHistory] = useRecoilState(historyState);
  const [translate, setTranslate] = useState<boolean>(false);

  const handleClick = (item: MusicAttributes) => {
    setMusic({
      name: item.name,
      artists: item.artists,
      images: item.images,
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
    <div className="hidden  cursor-pointer w-full h-[280px] lg:h-[310px] snap-x snap-mandatory md:flex overflow-x-scroll custom-scrollbar rounded-[8px] space-x-[24px] py-[12px]">
      {carouselItems.map((item, index) => {
        return (
          <div
            onClick={() => {
              handleClick(item);
            }}
            key={index}
            className="w-full bg-[#ff44c4] flex-shrink-0 snap-center flex flex-row items-center justify-between gap-[24px]   rounded-[8px] py-[32px] px-[24px]"
          >
            <div className=" flex flex-col items-start justify-between h-full">
              <div className=" flex flex-col gap-[12px]">
                <h1 className="text-[#ffffff] text-xl lg:text-2xl line-clamp-2 xl:line-clamp-3 xl:text-4xl font-bold">
                  {item.name}
                </h1>
                <div className="flex flex-row items-center space-x-[4px]">
                  {item.artists.map((artist, index) => {
                    return (
                      <div className="text-white flex gap-[6px]" key={index}>
                        {index > 0 && <h1>| </h1>} <h1>{artist.name}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Image
                className="hover:-translate-y-2 transition-all duration-200"
                onClick={() => {
                  setTranslate(true);
                }}
                alt={item.name}
                width={48}
                height={48}
                src={"/play.svg"}
              />
            </div>
            <Image
              className="rounded-[8px] invisible lg:visible"
              alt={item.name}
              width={244}
              height={244}
              src={item.images[0].url}
            />
            <Image
              className="rounded-[8px] visible lg:hidden"
              alt={item.name}
              width={200}
              height={200}
              src={item.images[0].url}
            />
          </div>
        );
      })}
    </div>
  );
};

"use client";
import { displaySidebarState } from "@/store/displaySidebar";
import { musicState } from "@/store/music";
import Image from "next/image";
import { useRecoilState } from "recoil";

const features = [
  {
    img: "/home.svg",
    text: "Home",
  },
  {
    img: "/compass.svg",
    text: "Discover",
  },
  {
    img: "/music.svg",
    text: "Collections",
  },
];

const library = [
  {
    img: "/download.svg",
    text: "Download",
  },
  {
    img: "/heart.svg",
    text: "Favourites",
  },
  {
    img: "/files.svg",
    text: "Local Files",
  },
];

export const Sidebar: React.FC = () => {
  const [music, setMusic] = useRecoilState(musicState);
  const [displaySidebar, setDisplaySidebar] =
    useRecoilState(displaySidebarState);

  return (
    <div
      className={` overflow-hidden fixed left-0 h-full pb-[120px] transition-all duration-300  ${
        displaySidebar ? "lg:w-[240px] w-0" : "w-0"
      } bg-[#000000]  flex flex-col items-start`}
    >
      {displaySidebar&&<div className="px-[16px] py-[24px]  h-full flex flex-col w-full gap-[24px]">
        <div className="w-full h-[50px]  flex items-center justify-between ">
          <Image className="" alt="logo" width={100} height={300} src={"/logo3.svg"} />
          <button
            onClick={() => setDisplaySidebar(false)}
            className="hover:bg-[#282828] p-2 rounded-full"
          >
            <Image
              alt="ham"
              width={24}
              height={24}
              src={"/hamburger-close.svg"}
            />
          </button>
        </div>

        <div className="flex flex-col gap-[32px] w-full ">
          <div className="flex flex-col items-start gap-[12px] w-full">
            <h1 className="text-zinc-500 text-xs font-bold">FEATURES</h1>
            <div className="flex flex-col items-start w-full">
              {features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-[12px] items-center w-full hover:bg-[#282828] h-[40px] px-[8px] cursor-pointer rounded-[8px]"
                  >
                    <Image
                      alt={feature.text}
                      width={20}
                      height={20}
                      src={feature.img}
                    />
                    <h1 className="text-zinc-400 text-sm">{feature.text}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px] w-full">
            <h1 className="text-zinc-500 text-xs font-bold">LIBRARY</h1>
            <div className="flex flex-col items-start w-full">
              {library.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-[12px] items-center w-full  hover:bg-[#282828] h-[40px] px-[8px] cursor-pointer rounded-[8px]"
                  >
                    <Image
                      alt={feature.text}
                      width={20}
                      height={20}
                      src={feature.img}
                    />
                    <h1 className="text-zinc-400 text-sm">{feature.text}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>}

      {music &&displaySidebar&& (
        <div className="text-white mt-auto">
          <Image
            alt={music?.name!}
            width={240}
            height={240}
            src={music?.images[0].url!}
          />
        </div>
      )}
    </div>
  );
};

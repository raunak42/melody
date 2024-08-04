"use client";
import { MusicAttributes } from "@/app/page";
import { historyState } from "@/store/history";
import { musicState } from "@/store/music";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { initialHistory } from "../Mybar/initHistory";

interface MusicCardProps {
  musicCardItem: MusicAttributes;
}

export const MusicCard: React.FC<MusicCardProps> = ({ musicCardItem }) => {
  const [music, setMusic] = useRecoilState(musicState);
  const [history, setHistory] = useRecoilState(historyState);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory(initialHistory);
    setMusic(initialHistory[initialHistory.length - 1]);
  }, [setHistory, setMusic]);

  const handleClick = () => {
    setMusic({
      name: musicCardItem.name,
      images: musicCardItem.images,
      artists: musicCardItem.artists,
    });
    setHistory((prev) => [
      ...(prev || []),
      {
        name: musicCardItem.name,
        images: musicCardItem.images,
        artists: musicCardItem.artists,
      },
    ]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top, width, height } =
        cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      const tiltX = (y - 0.5) * 45; 
      const tiltY = (x - 0.5) * -45; 
      cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };
  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-[150px] flex-shrink-0 space-y-[8px] cursor-pointer "
    >
      <Image
        draggable={false}
        className="rounded-[4px]"
        width={150}
        height={150}
        alt={musicCardItem.name}
        src={musicCardItem.images[0].url}
      />
      <div>
        <h1 className="line-clamp-1 text-white text-lg  ">
          {musicCardItem.name}
        </h1>
        <h1 className="line-clamp-1 text-zinc-500  text-sm ">
          {musicCardItem.artists[0].name}
        </h1>
      </div>
    </div>
  );
};

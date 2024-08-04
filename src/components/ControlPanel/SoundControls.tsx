"use client";
import Image from "next/image";
import { useState } from "react";

export const SoundControls: React.FC = () => {
  const [volumeOff, setVolumeOff] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-end  gap-[12px]">
      <button
        onClick={() => {
          setVolumeOff(!volumeOff);
        }}
      >
        {" "}
        {!volumeOff && (
          <Image alt="img" width={24} height={24} src={"/volume.svg"} />
        )}
        {volumeOff && (
          <Image alt="img" width={24} height={24} src={"/volume-off.svg"} />
        )}
      </button>

      <input
        type="range"
        className="accent-[#0864f4] h-[4px] w-[150px] cursor-pointer rounded-full"
      />

      <Image alt="img" width={24} height={24} src={"/mic.svg"} />
      <Image alt="img" width={24} height={24} src={"/devices.svg"} />
      <Image alt="img" width={24} height={24} src={"/share.svg"} />
    </div>
  );
};

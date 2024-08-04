"use client";
import Image from "next/image";
import { useState } from "react";

export const Controls: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <div className="flex flex-col items-center justify-center gap-[14px]  h-full ">
      <div className="flex flex-row items-center justify-center w-full gap-[32px]">
        <button>
          {" "}
          <Image alt="img" width={24} height={24} src={"/shuffle.svg"} />
        </button>
        <button>
          {" "}
          <Image alt="img" width={24} height={24} src={"/previous.svg"} />
        </button>
        <button
          onClick={() => {
            setPlay(!play);
          }}
        >
          {" "}
          {play && (
            <Image alt="img" width={58} height={58} src={"/play2.svg"} />
          )}
          {!play && (
            <Image alt="img" width={58} height={58} src={"/pause.svg"} />
          )}
        </button>
        <button>
          {" "}
          <Image alt="img" width={24} height={24} src={"/next.svg"} />
        </button>
        <button>
          {" "}
          <Image alt="img" width={24} height={24} src={"/repeat.svg"} />
        </button>
      </div>
      <input
        type="range"
        className="accent-[#0864f4] h-[4px] w-[300px] md:w-[600px] cursor-pointer rounded-full  "
      />
    </div>
  );
};

import Image from "next/image";
import { History } from "./History";

export const Mybar: React.FC = () => {
  return (
    <div className="hidden  h-full fixed right-0 bg-[#000000] w-[300px] px-[12px] py-[24px] xl:flex flex-col items-center gap-[16px]">
      <div className="flex flex-row  w-full h-[60px]">
        <div className="w-[60%] flex flex-row items-center  gap-[8px]">
          <Image
            className="rounded-full"
            alt="img"
            width={50}
            height={50}
            src={"/rick2.jpg"}
          />
          <h1 className="text-white">Rick Sanchez</h1>
        </div>
        <div className="w-[40%] flex flex-row items-center justify-end  gap-[18px] pr-[6px]">
          <Image alt="bell" width={20} height={20} src={"/bell.svg"} />
          <Image alt="bell" width={14} height={14} src={"/chevron.svg"} />
        </div>
      </div>
      <History />
      <div className="w-full px-[12px] flex items-center justify-center">
        {" "}
        <button className="w-[100%] bg-white h-[40px] rounded-[8px]">
          Create New Playlist
        </button>
      </div>
    </div>
  );
};

"use client";

import { displaySidebarState } from "@/store/displaySidebar";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { Searchbar } from "../Searchbar/Searchbar";
import { Sidebar } from "../Sidebar/Sidebar";

export const Navbar: React.FC = () => {
  const [displaySidebar, setDisplaySidebar] =
    useRecoilState(displaySidebarState);
  return (
    <div className="flex flex-row items-center  justify-between">
      <div className="flex items-center gap-[48px]">
        {!displaySidebar && (
          <button
            onClick={() => setDisplaySidebar(true)}
            className="hover:bg-[#282828] p-2 rounded-full hidden lg:block"
          >
            <Image alt="ham" width={24} height={24} src={"/hamburger.svg"} />
          </button>
        )}

        {/* <div className="flex flex-row items-center justify-between w-[70px] ">
        <Image alt="img" width={24} height={24} src={"/arrowPrev.svg"} />
        <Image alt="img" width={24} height={24} src={"/arrowNext.svg"} />
      </div> */}
        <Searchbar />
      </div>

      <Image className="hidden sm:flex" alt="img" width={24} height={24} src={"/dots.svg"} />
    </div>
  );
};

"use client";

import { MusicAttributes } from "@/app/page";
import { Navbar } from "../Navbar/Navbar";
import { Carousel } from "../Carousel/Carousel";
import { NewReleases } from "../NewReleases/NewReleases";
import { ArtistRows } from "../ArtistRows/ArtistRows";
import { useRecoilState } from "recoil";
import { displaySidebarState } from "@/store/displaySidebar";

interface PageContentProps {
  carouselItems: MusicAttributes[];
  newReleases: MusicAttributes[];
  allItems: MusicAttributes[][];
}

export const PageContent: React.FC<PageContentProps> = ({
  allItems,
  carouselItems,
  newReleases,
}) => {
    const [displaySidebar, setDisplaySidebar] =
    useRecoilState(displaySidebarState);
  return (
    <div className={`flex flex-col gap-[24px] md:gap-[10px] transition-all duration-300 ${
        displaySidebar && "lg:ml-[240px] ml-0"
      } xl:mr-[300px] mr-0 mb-[120px] md:py-[24px] md:px-[48px] p-[12px] `}>
      <Navbar />
      <Carousel carouselItems={carouselItems} />
      <NewReleases newReleases={newReleases} />
      <ArtistRows allItems={allItems} />
    </div>
  );
};

import { MusicAttributes } from "@/app/page";
import { MusicCard } from "../MusicCard/MusicCard";

interface ArtistRowsProps {
  allItems: MusicAttributes[][];
}

export const ArtistRows: React.FC<ArtistRowsProps> = ({ allItems }) => {
  return (
    <div className="flex flex-col mt-[30px] space-y-[42px]" >
      {allItems.map((items, index) => {
        return (
          <div key={index} className="flex flex-col items-start gap-[14px]">
            <h1 className="text-white text-3xl font-bold">
              {items[index].artists[0].name}
            </h1>

            <div className="flex flex-row  w-full space-x-[16px] overflow-x-auto scrollbar-hidden px-[8px] py-[8px] ">
              {items.map((item, index) => {
                return <MusicCard key={index} musicCardItem={item} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

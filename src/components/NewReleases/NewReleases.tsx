import { MusicAttributes } from "@/app/page";
import { MusicCard } from "../MusicCard/MusicCard";

interface NewReleasesProps {
  newReleases: MusicAttributes[];
}

export const NewReleases: React.FC<NewReleasesProps> = ({ newReleases }) => {
  return (
    <div className="flex flex-col items-start gap-[14px]">
      <h1 className="text-white text-3xl font-bold">New Releases</h1>

      <div className="flex flex-row  w-full space-x-[16px] overflow-x-auto scrollbar-hidden py-[8px] px-[8px]  ">
        {newReleases.map((newRelease, index) => {
          return <MusicCard key={index} musicCardItem={newRelease} />;
        })}
      </div>
    </div>
  );
};

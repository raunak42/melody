import { Controls } from "./Controls";
import { SoundControls } from "./SoundControls";
import { MusicInfo } from "./MusicInfo";

export const ControlPanel: React.FC = () => {
  return (
    <div className="w-full h-[120px] border-t border-t-zinc-600 fixed bottom-0 bg-[#000000] grid grid-cols-3 px-[24px]">
      <div className="col-span-1 hidden xl:flex">
        <MusicInfo />
      </div>
      <div className="xl:col-span-1 col-span-3 ">
        {" "}
        <Controls />
      </div>
      <div className="col-span-1 xl:flex items-center justify-end hidden">
        <SoundControls />
      </div>
    </div>
  );
};

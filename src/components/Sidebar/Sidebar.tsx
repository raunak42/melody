import Image from "next/image";

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
  return (
    <div className="fixed left-0 h-full w-[270px] bg-[#000000] px-[16px] py-[24px] flex flex-col items-start gap-[32px]">
      <div className="w-full h-[50px]  flex items-center justify-between ">
        <Image alt="logo" width={100} height={300} src={"/logo3.svg"} />
        <button className="hover:bg-[#282828] p-2 rounded-full">
          <Image
            alt="ham"
            width={20}
            height={20}
            src={"/hamburger-close.svg"}
          />
        </button>
      </div>

      <div className="flex flex-col gap-[32px] w-full ">
        <div className="flex flex-col items-start gap-[12px] w-full">
          <h1 className="text-zinc-500 text-xs font-bold">FEATURES</h1>
          <div className="flex flex-col gap-[24px] items-start w-full">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row gap-[12px] items-center w-full"
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
          <div className="flex flex-col gap-[24px] items-start w-full">
            {library.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row gap-[12px] items-center w-full"
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

      <div className="text-white mt-auto">seggs</div>
    </div>
  );
};

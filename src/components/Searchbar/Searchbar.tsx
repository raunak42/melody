import Image from "next/image";

export const Searchbar: React.FC = () => {
  return (
    <div className="bg-white rounded-full w-[350px] md:w-[400px] lg:w-[600px] h-[50px] flex flex-row items-center justify-between overflow-hidden">
      <div className="md:w-[10%] w-[20%] flex items-center justify-center">
        {" "}
        <Image alt="search" width={24} height={24} src={"/search.svg"} />
      </div>
      <input
        placeholder="Search for artists, songs, or albums"
        className="outline-none h-[90%] md:h-full md:w-[90%] w-[80%] rounded-r-full text-[#A1A1AA] text-sm md:text-base "
      ></input>
    </div>
  );
};

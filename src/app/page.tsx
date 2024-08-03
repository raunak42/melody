import Image from "next/image";
import { getValidToken } from "./utils/getValidToken";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Mybar } from "@/components/Mybar/Mybar";

export interface tokenAttributes {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export default async function Home() {
  const tokenData: tokenAttributes = await getValidToken();

  const response = await fetch(
    `https://api.spotify.com/v1/browse/new-releases?limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    }
  );

  const data = await response.json();
  const items = data.albums.items;
  console.log(items[24]);

  return (
    <div className="flex flex-col items-start gap-[14px]">
      <h1 className="text-white text-3xl font-bold">New Releases</h1>

      <div className="flex flex-row  w-full space-x-[28px] overflow-x-auto scrollbar-hidden  ">
        {items.map((item, index) => {
          return (
            <div key={index} className="w-[184px] flex-shrink-0 space-y-[8px] ">
              <Image
                className="rounded-[4px]"
                key={index}
                width={184}
                height={184}
                alt={item.name}
                src={item.images[0].url}
              />
              <div>
                <h1 className="line-clamp-1 text-white text-lg  ">
                  {item.name}
                </h1>
                <h1 className="line-clamp-1 text-zinc-500  text-sm ">
                  {item.artists[0].name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

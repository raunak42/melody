import { getValidToken } from "./utils/getValidToken";
import {
  getAllItems,
  getItemsByArtist,
  getNewReleases,
} from "./utils/functions";
import { PageContent } from "@/components/PageContent/PageContent";

export interface TokenAttributes {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface MusicAttributes {
  name: string;
  artists: {
    name: string;
  }[];
  images: {
    url: string;
  }[];
  release_date?: string;
}

export default async function Home() {
  const tokenData: TokenAttributes = await getValidToken();
  const carouselItems: MusicAttributes[] = await getItemsByArtist(
    tokenData,
    "0YC192cP3KPCRWx8zr8MfZ"
  );
  const newReleases: MusicAttributes[] = await getNewReleases(tokenData);

  const allItems = await getAllItems(tokenData);

  return (
      <PageContent allItems={allItems} carouselItems={carouselItems} newReleases={newReleases} />
  );
}

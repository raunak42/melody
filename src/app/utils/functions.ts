import { MusicAttributes, TokenAttributes } from "../page";

export const getNewReleases = async (tokenData: TokenAttributes) => {
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
    return items;
  };
  
  export const getItemsByArtist = async (
    tokenData: TokenAttributes,
    artistId: string
  ) => {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );
  
    const data = await response.json();
    const items: MusicAttributes[] = data.items;
    return items;
  };
  
  export const getAllItems = async (tokenData: TokenAttributes) => {
    const allItemsPromises = artists.map((artist) =>
      getItemsByArtist(tokenData, artist.id)
    );
  
    const allItems = await Promise.all(allItemsPromises);
    return allItems;
  };

  export const artists = [
    {
      name: "ludwig",
      id: "24eDfi2MSYo3A87hCcgpIL",
    },
    {
      name: "eminem",
      id: "7dGJo4pcD2V6oG8kP0tJRR",
    },
    {
      name: "KSI",
      id: "1nzgtKYFckznkcVMR3Gg4z",
    },
    {
      name: "pitbull",
      id: "0TnOYISbd1XYRBk9myaseg",
    },
    {
      name: "taylor",
      id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      name: "rihanna",
      id: "5pKCCKE2ajJHZ9KAiaK11H",
    },
  ];
import { tokenAttributes } from "../page";

export const getValidToken = async () => {
    const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: process.env.SPOTIFY_CLIENT_ID!,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET!,
        }),
    });

    const data: tokenAttributes = await response.json();

    return data;
}
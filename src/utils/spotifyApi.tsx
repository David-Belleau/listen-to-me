import axios from "axios";
import {
  api_token,
  client_id,
  client_secret,
  spotifyApi,
  uri,
} from "../apis/spotifyConfig";
import { TokenResponseProps } from "./types";

const GetToken = async () => {
  const response = await axios(`${api_token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });
  console.log("getToken response.data", response.data);
  spotifyApi.setAccessToken(response.data.access_token);
  if (response.data.access_token) {
    return response.data.access_token;
  } else {
    const { status, statusText }: TokenResponseProps = response;
    console.log("getToken status", status);
    console.log("getToken statusText", statusText);
  }
};

// spotifyApi.setAccessToken(GetToken())

const GetMusicData = async () => {
  const token = await GetToken();
  console.log("getMusic token", token);
  try {
    const { data } = await axios(`${uri}/browse/new-releases?limit=20`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("data", data?.albums);
    return data?.albums?.items;
  } catch (error) {
    console.log("getMusic error", error);
    // error.response.status
    // error.message
  }
};

export { GetToken, GetMusicData };

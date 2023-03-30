// import axios from "axios";
import {
  // api_token,
  client_id,
  client_secret,
  // spotifyApi,
  redirect_uri,
} from "../apis/spotifyConfig";
// import { TokenResponseProps } from "./types/components";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetTokenDataApi } from './types/apiCalls';

/* 
export const GetToken = async () => {
  const response = await axios(`${api_token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });
  spotifyApi.setAccessToken(response.data.access_token);
  if (response.data.access_token) {
    return response.data.access_token;
  } else {
    const { status, statusText }: TokenResponseProps = response;
  }
}; */

export const getTokenData = createApi({
  reducerPath: "getToken",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://accounts.spotify.com/api",
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation<GetTokenDataApi,{}>({
      query: (code) => ({
        url: "/token",
        method: "POST",
        body: {
          code:code,
          grant_type: "authorization_code",
          redirect_uri: redirect_uri,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': `client_id=${client_id}&client_secret=${client_secret}`
        }
      }),
    }),
  }),
});

// spotifyApi.setAccessToken(GetToken())

/* export const GetMusicData = async () => {
  const token = await GetToken();
  try {
    const { data } = await axios(`${uri}/browse/new-releases?limit=20`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data?.albums?.items;
  } catch (error) {
    // error.response.status
    // error.message
  }
}; */

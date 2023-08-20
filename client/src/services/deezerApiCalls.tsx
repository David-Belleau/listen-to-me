import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getMusicData = createApi({
  reducerPath: "getMusicData",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (builder) => ({
    getChartArtists: builder.query({
      query: () => ({
        url: "chart/artists",
      }),
    }),
    getChartTracks: builder.query({
      query: () => ({
        url: "chart/tracks",
      }),
    }),
    getChartAlbums: builder.query({
      query: () => ({
        url: "chart/albums",
      }),
    }),
  }),
});

export const {
  useGetChartArtistsQuery,
  useGetChartTracksQuery,
  useGetChartAlbumsQuery,
} = getMusicData;

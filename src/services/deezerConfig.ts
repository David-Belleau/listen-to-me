export const uri = "https://connect.deezer.com/oauth/";
export const api_name = "https://api.deezer.com/";
export const app_id = 624364;
export const development = "http://localhost:3000";
export const production = "https://listen-to-me.netlify.app";
export const environment =
  process.env.NODE_ENV === "production" ? production : development;
export const redirect_uri =
  environment === development ? development : production;
export const host = "https://listen-to-me.netlify.app/.netlify/functions/";
export const token = "currentAccessToken";

import SpotifyWebApi from "spotify-web-api-node";

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const uri = process.env.REACT_APP_URI;
const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
const api_token = process.env.REACT_APP_API_TOKEN;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
  redirectUri: redirect_uri,
});

export { client_id, client_secret, uri, redirect_uri, api_token, spotifyApi };

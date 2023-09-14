export const uri = process.env.REACT_APP_URI;
export const api_name = process.env.REACT_APP_API_NAME;
export const app_id = process.env.REACT_APP_APP_ID;
export const development = process.env.REACT_APP_DEVELOPMENT;
export const production = process.env.REACT_APP_PRODUCTION;
export const environment =
  process.env.NODE_ENV === "production" ? production : development;
export const host = process.env.REACT_APP_HOST;

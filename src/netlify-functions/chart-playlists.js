import axios from "axios"
import { api_name } from "../services/deezerConfig";
import { handler as allowedOrigin } from "./allowedOrigin";

export const handler = async (event) => {
    try {
        const response = await axios.get(`${api_name}chart/0/playlists`);
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin(event),
                "Access-Control-Allow-Headers": "Content-Type",
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin(event),
                "Access-Control-Allow-Headers": "Content-Type",
            }
        };
    }
}

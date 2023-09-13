import axios from "axios"
import { handler as allowedOrigin } from "./allowedOrigin";

export const handler = async (event) => {
    const {artistId} = event?.pathParameters
    try {
        const response = await axios.get(`https://api.deezer.com/artist/${artistId}/top?limit=50`);
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

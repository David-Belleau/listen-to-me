import {handler as allowedOrigin} from "./allowedOrigin.js"
import axios from "axios"

export const handler = async (event) => {
    try {
        const response = await axios.get('https://api.deezer.com/chart/0/artists');
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
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    }
}

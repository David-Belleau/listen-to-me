import axios from "axios"
import { handler as allowedOrigin } from "./allowedOrigin";
import {handler as IdsData} from "./ids-data"

import { useParams } from "react-router-dom";
export const handler = async (event, ) => {
    let artistId 
    IdsData(artistId)
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

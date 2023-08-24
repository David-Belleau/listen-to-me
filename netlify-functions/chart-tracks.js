import { axios} from "axios";
import allowedOrigin from "../src/utils/headersApiCalls";

export const handler = async () => {
    try {
        const response = await axios?.get('https://api.deezer.com/chart/0/tracks');
        return {
            statusCode: 200,
            body: JSON.stringify(response?.data),
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin(),
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
            headers: {
                "Access-Control-Allow-Origin": allowedOrigin(),
                "Access-Control-Allow-Headers": "Content-Type"
            }
        };
    }
}

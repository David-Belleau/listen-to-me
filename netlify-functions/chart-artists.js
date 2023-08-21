import { axios } from "axios";

export const ChartArtists = async () => {
    try {
        const response = await axios.get('https://api.deezer.com/chart/0/artists');
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}
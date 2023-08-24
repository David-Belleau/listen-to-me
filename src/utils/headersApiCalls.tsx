import { EventProps } from "./types/apiData";

export const allowedOrigin = () => {
    const origin = (e?:EventProps) => e!.headers.Origin || e!.headers.Origin;
    let allowedOrigin;

    switch (origin()) {
        case 'http://localhost:3000':
            allowedOrigin = 'http://localhost:3000';
            break;
        case 'https://listen-to-me.netlify.app':
            allowedOrigin = 'https://listen-to-me.netlify.app';
            break;
        default:
            allowedOrigin = 'none';
            break;
    }
    return allowedOrigin
}
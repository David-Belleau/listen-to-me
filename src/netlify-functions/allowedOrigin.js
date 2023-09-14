import { development, production } from "../services/deezerConfig";

export const handler = (event) => {
    const origin = event?.headers?.origin || event?.headers?.origin || 'undefined';
    let allowedOrigin;

    switch (origin) {
        case production:
            allowedOrigin = production;
            break;
        case development:
            allowedOrigin = development;
            break;
        case 'undefined':
            allowedOrigin = 'undefined';
            break;
        default:
            throw new Error(`Origin not allowed: ${origin}`);
    }
    return allowedOrigin
}
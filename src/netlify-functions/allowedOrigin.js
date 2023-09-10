export const handler = (event) => {
    const origin = event.headers.origin || event.headers.origin || 'undefined';
    let allowedOrigin;

    switch (origin) {
        case 'http://localhost:3000':
            allowedOrigin = 'http://localhost:3000';
            break;
        case 'https://listen-to-me.netlify.app':
            allowedOrigin = 'https://listen-to-me.netlify.app';
            break;
        case 'undefined':
            allowedOrigin = 'undefined';
            break;
        default:
            throw new Error(`Origin not allowed: ${origin}`);
    }
    return allowedOrigin
}
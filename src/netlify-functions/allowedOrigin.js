export const handler = (event) => {
    const origin = event => event.headers.Origin || event.headers.Origin
    let allowedOrigin;

    switch (origin(event)) {
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
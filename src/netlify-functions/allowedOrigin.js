export const handler = () => {
    const origin = e => e.headers.Origin || e.headers.Origin
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
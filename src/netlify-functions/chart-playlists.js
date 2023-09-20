import {handler as template} from './template'

export const handler = async (event) => {
    return template(event,'playlists')
}

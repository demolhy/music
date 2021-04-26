import { get } from './https'

export const musicList = e => {
    return get('comment/music',e)
}

export const banner = e => {
    return get('/banner',e)
}

export const hotSongMenu = e => {
    return get('/top/playlist/highquality',e)
}

export const newMusic = e => {
    return get('/personalized/newsong',e)
}

export const musicSrc = e => {
    return get('/song/url',e)
}
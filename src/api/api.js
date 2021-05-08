import {
    get
} from './https'

export const musicList = e => {
    return get('comment/music', e)
}

export const banner = e => {
    return get('/banner', e)
}

export const hotSongMenu = e => {
    return get('/top/playlist/highquality', e)
}

export const newMusic = e => {
    return get('/personalized/newsong', e)
}

export const musicSrc = e => {
    return get('/song/url', e)
}

export const songList = e => {
    return get('/top/playlist', e)
}

export const songMenu = e => {
    return get('/playlist/catlist', e)
}

export const musicItem = e => {
    return get('/playlist/detail', e)
}

export const musicDetail = e => {
    return get('/song/detail', e)
}

export const comment = e => {
    return get('/comment/hot', e)
}

export const lyric = e => {
    return get('/lyric',e)
}
import { 
    MUSIC_PLAY,
    CONTROL_TOGGLE,
    GET_MUSIC_URL,
    SET_URL,
    LOADING,
    LOADED,
    ADD_SONG,
    PREV_SONG
} from './actionTypes'

export function play() { 
    return {
        type:MUSIC_PLAY
    }
}

export function toggle() { 
    return {
        type:CONTROL_TOGGLE
    }
}
export function getMusic(id) { 
    return {
        type: GET_MUSIC_URL,
        id
    }
}

export function setUrl(url) { 
    return {
        type: SET_URL,
        url
    }
}

export function loading() { 
    return {
        type: LOADING,
    }
}

export function loaded() { 
    return {
        type: LOADED,
    }
}

export function addSong(song) { 
    return {
        type: ADD_SONG,
        song
    }
}

export function prevSong() { 
    return {
        type: PREV_SONG
    }
}
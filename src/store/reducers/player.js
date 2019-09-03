import {
    MUSIC_PLAY,
    CONTROL_TOGGLE,
    SET_URL,
    ADD_SONG,
    PREV_SONG
} from '../actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    playing: false,
    currentUrl: '',
    currentIdx: 0,
    playlist: []
})

export default function player(state = defaultState, action) {
    if (action.type === MUSIC_PLAY) { 
        return state.set('playing',true)
    }
    if (action.type === CONTROL_TOGGLE) { 
        return state.set('playing',!state.get('playing'))
    }
    if (action.type === SET_URL) { 
        console.log(action.url)
        return state.set('currentUrl',action.url)
    }
    if (action.type === ADD_SONG) { 
        return state.updateIn(['playlist'],playlist=>playlist.push(action.song))
    }
    if (action.type === PREV_SONG) { 
        let idx = state.get('playlist').size - 1
        if(idx < 0) idx = 0
        return state.set('currentIdx',idx)
    }
    return state;
}
import { put, takeEvery } from 'redux-saga/effects'
import { GET_MUSIC_URL,PREV_SONG } from './actionTypes'
import { setUrl, play } from './actionCreator'
import { getMusicUrl } from '../api/playlist'
function* getUrl(action) { 
    try {
        const res = yield getMusicUrl({ id: action.id })
        yield put(setUrl(res.data[0].url))
        yield put(play())
    } catch (e) { 
        console.log(e)
    }
    
}
function* prevSong(action) { 
    yield console.log(1)
}
export default function* sagas() { 
    yield takeEvery(GET_MUSIC_URL, getUrl)
    yield takeEvery(PREV_SONG, prevSong)
}
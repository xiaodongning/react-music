import {
    LOADING,
    LOADED
} from '../actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    loading: false
})

export default function app(state = defaultState, action) {
    if (action.type === LOADING) { 
        return state.set('loading',true)
    }
    if (action.type === LOADED) { 
        return state.set('loading',false)
    }
    return state;
}
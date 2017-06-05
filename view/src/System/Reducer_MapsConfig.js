import {initialState} from './InitialState';

export function mapsConfig (state = initialState.mapsConfig, action){
    switch (action.type){
        case "EDIT_PLAYMAP":
            return {
                ...state,
                playmap: action.playMapUrl
            }
    }
}
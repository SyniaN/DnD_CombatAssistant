import {initialState} from './InitialState';
import {tokens} from './Reducer_Tokens';
import {mapsConfig} from './Reducer_MapsConfig';

export function mainReducer(state = initialState, action){
    return {
        maps: maps(state.mapsConfig, action),
        tokens: tokens(state.tokens, action)
    }
}
import * as actionTypes from './actionTypes'; 
import { RATARGUL } from '../shared/ratargul';
import { NILGIRI } from '../shared/nilgiri';

const INITIAL_STATE = {
    places: {
        ratargul: RATARGUL,
        nilgiri: NILGIRI, 
    },
}

export const reducer = (state=INITIAL_STATE, action) => {
    // const places = [...state.places]; 
    return state; 
}
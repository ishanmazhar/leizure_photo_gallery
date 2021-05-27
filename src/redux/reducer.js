import * as actionTypes from './actionTypes'; 
import { RATARGUL } from '../shared/ratargul';
import { NILGIRI } from '../shared/nilgiri';

const INITIAL_STATE = {
    places: {
        ratargul: RATARGUL,
        nilgiri: NILGIRI, 
    },
    comments: [],
    commentLoading: true,
    commentErr: false,

}

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({                    
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                comments: comments,
                commentLoading: false,
            }
        case actionTypes.COMMENTS_LOAD_FAILED:
            return {
                ...state,
                commentErr: true, 
                commentLoading: false, 
            }

        default:
            return state; 
    }
}
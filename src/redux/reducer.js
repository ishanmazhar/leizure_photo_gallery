import * as actionTypes from './actionTypes'; 
import { RATARGUL } from '../shared/ratargul';
import { NILGIRI } from '../shared/nilgiri';

const INITIAL_STATE = {
    places: {
        ratargul: RATARGUL,
        nilgiri: NILGIRI, 
    },
    comments: [],
    commentsLoading: true,
    commentsErr: false, 
}

export const reducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.LOAD_COMMENTS:
            // for (let key in action.payload) {
            //     console.log(action.payload[key]); 
            // }
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
                commentsLoading: false,
            }
        case actionTypes.COMMENTS_LOAD_FAILED:
            return {
                ...state,
                commentErr: true, 
                commentsLoading: false, 
            }
        case actionTypes.ADD_COMMENTS:
            let comment = action.payload;
            console.log(comment);
            return {
                ...state,
                comments: state.comments.concat(comment), 
            }
        default:
            return state; 
    }
}
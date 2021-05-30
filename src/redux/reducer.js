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
    token: null,
    userId: null,
    authLoading: false,
    authFailedMsg: null, 
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
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId, 
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null, 
                token: null, 
                userId: null, 
            }
        case actionTypes.AUTH_LOADING:
            return {
                ...state,
                authLoading: action.payload,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload, 
            }
        default:
            return state; 
    }
}
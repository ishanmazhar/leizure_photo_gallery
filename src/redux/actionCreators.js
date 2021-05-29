import * as actionTypes from './actionTypes';
import axios from 'axios'; 

var path = "sajek";

export const addComment = (author, comment, dbPath) => dispatch => {
    var id;
    
    const newComment = {
        comments: {
            author: author,
            comment: comment,
        },
    }
    newComment.commentTime = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date());
    axios.post(`https://leizure-gallery-default-rtdb.firebaseio.com/${dbPath}.json`, newComment)
        .then(response => {
            console.log(response);
            id = response.data.name;
            newComment.id = id;
            console.log(id)
            dispatch(commentConcat(newComment));
            return response.data;
        })
        .catch(error => console.log(error)) 
}

export const commentConcat = comment => {
    return {
        type: actionTypes.ADD_COMMENTS,
        payload: comment,
    }
}

export const loadComments = comments => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments,
    }
}

export const commentsLoadFailed = () => {
    return {
        type: actionTypes.COMMENTS_LOAD_FAILED,
    }
}

export const fetchComments = (dbPath) => dispatch => {
        axios.get(`https://leizure-gallery-default-rtdb.firebaseio.com/${dbPath}.json`)
            .then(response => {
                console.log(response.data);
                dispatch(loadComments(response.data))
            })
}
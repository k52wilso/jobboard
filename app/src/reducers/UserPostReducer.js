import GET_COMMENTS from '../actionTypes';
const initialState = {
    comments: []
}

function getComments(state = initialState, action) {
    if(action.type == GET_COMMENTS ){
        return {
            ...state,
            comments:action.comments
        }
    }
    return {
        ...state
    }
}
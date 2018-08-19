import GET_COMMENTS from '../actionTypes';
import AppService from '../AppService';

export function getComments(comments){
    return {
        type: GET_COMMENTS,
        comments:AppService.fetchComments()
    }
} 
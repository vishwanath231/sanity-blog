import {
    SECTION_ONE_POST_REQUEST,
    SECTION_ONE_POST_SUCCESS,
    SECTION_ONE_POST_FAIL,
    SECTION_TWO_POST_REQUEST,
    SECTION_TWO_POST_SUCCESS,
    SECTION_TWO_POST_FAIL,
    SECTION_THREE_POST_REQUEST,
    SECTION_THREE_POST_SUCCESS,
    SECTION_THREE_POST_FAIL,
    AUTHOR_REQUEST,
    AUTHOR_SUCCESS,
    AUTHOR_FAIL
} from '../constants/blogConstants';


export const postOneReducer = (state = { posts:[] }, { type, payload }) => {
    
    switch (type) {
        case SECTION_ONE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                posts: []
            }
        case SECTION_ONE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: payload
            }
        case SECTION_ONE_POST_FAIL: 
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}


export const postTwoReducer = (state = { posts:[] }, { type, payload }) => {
    
    switch (type) {
        case SECTION_TWO_POST_REQUEST:
            return {
                ...state,
                loading: true,
                posts: []
            }
        case SECTION_TWO_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: payload
            }
        case SECTION_TWO_POST_FAIL: 
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}



export const postThreeReducer = (state = { posts:[] }, { type, payload }) => {
    
    switch (type) {
        case SECTION_THREE_POST_REQUEST:
            return {
                ...state,
                loading: true,
                posts: []
            }
        case SECTION_THREE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: payload
            }
        case SECTION_THREE_POST_FAIL: 
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}





export const authorReducer = (state = { authors:[] }, { type, payload }) => {
    
    switch (type) {
        case AUTHOR_REQUEST:
            return {
                ...state,
                loading: true,
                authors: []
            }
        case AUTHOR_SUCCESS:
            return {
                ...state,
                loading: false,
                authors: payload
            }
        case AUTHOR_FAIL: 
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
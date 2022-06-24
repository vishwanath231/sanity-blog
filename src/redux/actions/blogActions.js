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
import sanityClient from '../../client';



// GET SECTION ONE POSTS ==> ACTION
export const getSectionOnePosts = () => (dispatch) => {

    dispatch({
        type: SECTION_ONE_POST_REQUEST
    })

    sanityClient
    .fetch(`*[_type == "postOne"]{
        title,
        slug,
        mainImage{
            asset->{
                url
            }
        },
        tags,
        "name": author->name,
    }`).then(res => {

        dispatch({
            type: SECTION_ONE_POST_SUCCESS,
            payload: res
        })

    }).catch(err => {

        dispatch({
            type: SECTION_ONE_POST_FAIL,
            error: err
        })
    })

}





// GET SECTION TWO POSTS ==> ACTION
export const getSectionTwoPosts = () => (dispatch) => {

    dispatch({
        type: SECTION_TWO_POST_REQUEST
    })

    sanityClient
    .fetch(`*[_type == "postTwo"]{
        title,
        slug,
        mainImage{
            asset->{
                url
            }
        },
        tags,
        "name": author->name,
    }`).then(res => {

        dispatch({
            type: SECTION_TWO_POST_SUCCESS,
            payload: res
        })

    }).catch(err => {

        dispatch({
            type: SECTION_TWO_POST_FAIL,
            error: err
        })
    })

}



// GET SECTION THREE POSTS ==> ACTION
export const getSectionThreePosts = () => (dispatch) => {

    dispatch({
        type: SECTION_THREE_POST_REQUEST
    })

    sanityClient
    .fetch(`*[_type == "postThree"]{
        title,
        slug,
        mainImage{
            asset->{
                url
            }
        },
        tags,
        "name": author->name,
    }`).then(res => {

        dispatch({
            type: SECTION_THREE_POST_SUCCESS,
            payload: res
        })

    }).catch(err => {

        dispatch({
            type: SECTION_THREE_POST_FAIL,
            error: err
        })
    })
}




// GET ALL AUTHOR ==> ACTION
export const getAuthors = () => (dispatch) => {

    dispatch({
        type: AUTHOR_REQUEST
    })

    sanityClient
    .fetch(`*[_type == "author"]{
        name,
        slug,
        image{
            asset->{
                url
            }
        },
        bio
    }`).then(res => {

        dispatch({
            type: AUTHOR_SUCCESS,
            payload: res
        })

    }).catch(err => {

        dispatch({
            type: AUTHOR_FAIL,
            error: err
        })
    })

}
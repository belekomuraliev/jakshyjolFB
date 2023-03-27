import {
    GET_BLOG
} from "./types"

////Fetch list posts

const getBlogRequestPostsActionCreator = () => ({
   type: GET_BLOG.REQUEST
})

const getBlogReceivePostsActionCreator = (list) => ({
   type: GET_BLOG.RECEIVE,
   payload: list
})

const getBlogFailurePostsActionCreator = (err) => ({
   type: GET_BLOG.FAILURE,
   payload: err
})

export {
    getBlogRequestPostsActionCreator,
    getBlogReceivePostsActionCreator,
    getBlogFailurePostsActionCreator
}
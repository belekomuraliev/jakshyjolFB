import { GET_BLOG } from "./types"

const initialState = {
    loading: false,
    list: [],
    data: null,
    error: null
}

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
            case GET_BLOG.REQUEST:
                return {
                    ...state,
                    loading: true
                }
            case GET_BLOG.RECEIVE:
                return {
                    ...state,
                    list: action.payload,
                    loading: false
                }
            case GET_BLOG.FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
        default:
            return state
    }
}

export default questionsReducer

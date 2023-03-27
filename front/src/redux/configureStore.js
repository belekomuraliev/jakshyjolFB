import {combineReducers, createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import questionsReducer from "./questions/reducer"
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    questions: questionsReducer,
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
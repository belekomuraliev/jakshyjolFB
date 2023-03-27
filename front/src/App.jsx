import {BrowserRouter, Route, Switch, HashRouter} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import TestPage from "./pages/TestPage/TestPage";
import './App.css';
import './reset/reset.css'
// import { useDispatch, useSelector } from "react-redux";
// import postOperations from "./redux/questions/thunk"
// import { useEffect } from "react";

function App() {

  // const Questions = useSelector(state => state.questions.list)

  // const dispatch = useDispatch()

  // const {fetchQuestions} = postOperations

  // useEffect(() => {
  //   dispatch(postOperations.fetchQuestions())
  // }, [])
  // console.log(Questions)

  return (
      <HashRouter>
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route exact path="/test" component={TestPage} />
        </Switch>
      </HashRouter>
      
  );
}

export default App

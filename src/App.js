

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Component/Header/Home/Home';
import Notfound from "./Component/Header/Notfound/Notfound";
import PostDetails from "./Component/Header/PostDetails/PostDetails";

function App() {
  return (
    <div>
     
      <Router>
        <Switch>
         <Route exact path="/home" >
                 <Home></Home>
         </Route>
         <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/:postId">
               <PostDetails></PostDetails>
          </Route>
         
        </Switch>
      </Router>
    
   
    </div>
    
  );
}

export default App;

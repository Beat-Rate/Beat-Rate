import {BrowserRouter as Router,Route} from "react-router-dom";
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import Upload from './Screens/Upload';
import Budget from './Screens/Budget';

import ViewReviews from './Screens/ViewReviews';
import DesktopHomeScreen from "./Screens/DesktopScreen";

export var loggedInRoutes =
<Router>

  <Route exact path="/">
     {
      window.screen.width > 800? <DesktopHomeScreen/> :<Home/>
            
      
     }
       
     

    
    </Route>

    <Route exact path="/upload">
      <Upload/>
    </Route>
    <Route exact path ="/view-reviews">

      <ViewReviews/>
    </Route>

    <Route exact path="/budget/:pushId" component = {Budget}>
      
    </Route>
    

</Router>;

export var loggedOutRoutes =
<Router>

    <Route exact path="/">
      <SignUp/>
    </Route>

    <Route exact path="/signin">
      <SignIn/>
    </Route>

</Router>;


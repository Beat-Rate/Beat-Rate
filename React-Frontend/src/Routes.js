import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import Upload from './Screens/Upload';
import Budget from './Screens/Budget';

import ViewReviews from './Screens/ViewReviews';

export var loggedInRoutes =
<Router>

  <Route exact path="/">
      <Home/>
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

export var desktopLoggedInRoutes = 

<Router>


  <div>
    
  </div>

</Router>;

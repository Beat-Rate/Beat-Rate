import React from "react";
import {loggedInRoutes, loggedOutRoutes , desktopLoggedInRoutes} from './Routes';


export default class App extends React.Component{

  render(){
    if(window.screen.width > 800 && localStorage.getItem("logged")){
      return (desktopLoggedInRoutes)
    }
    else if (localStorage.getItem("logged")){
      return (loggedInRoutes)
    }else{
      return (loggedOutRoutes)
    }
    
}

}
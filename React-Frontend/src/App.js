import React from "react";
import {loggedInRoutes, loggedOutRoutes} from './Routes';


export default class App extends React.Component{

  render(){
    if (localStorage.getItem("logged")){
      return (loggedInRoutes)
    }else{
      return (loggedOutRoutes)
    }
    
}

}
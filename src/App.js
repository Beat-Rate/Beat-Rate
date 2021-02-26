import React from "react";
import {loggedInRoutes, loggedOutRoutes} from './Routes';
import Desktop from '../src/Screens/Desktop';

export default class App extends React.Component{


  render(){
    if(window.screen.width > 800){
      return <Desktop/>
    }else{
    if(localStorage.getItem("logged")){
      return (loggedInRoutes)
    }else{
      return (loggedOutRoutes)
    }
    
}
}
}
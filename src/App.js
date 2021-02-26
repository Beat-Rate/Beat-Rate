import React from "react";
import {loggedInRoutes, loggedOutRoutes} from './Routes';
import Desktop from '../src/Screens/Desktop';

export default class App extends React.Component{


  render(){
    return <Desktop/>
}
}
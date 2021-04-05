import React from 'react';
import init from "../Components/FirebaseInit.js";
import BottomForm from '../Components/BottomForm';
import SignInHeader from '../Components/SignInHeader';
import '../Css/Signin.css'
init();
export default class SignIn extends React.Component{
   

    render(){
        return(
            <>
                <center id = "maincenter">
                    <SignInHeader/>
                    <BottomForm/>
                </center>
           </>
        );
    }
}
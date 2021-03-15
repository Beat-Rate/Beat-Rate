import React from 'react';
import '../Css/Signup.css';
import SignUpHeader from "../Components/SignUpHeader"
import BottomForm from '../Components/BottomForm';

export default class SignUp extends React.Component{   
    toSignIn(){
        window.location.href="/signin"
    }

    render(){
        return(
            <>
            <center>
            <SignUpHeader/>
            <BottomForm/>
            </center>
            </>
        );
    }
}
import React from 'react';

import BottomForm from '../Components/BottomForm';
import SignInHeader from '../Components/SignInHeader';
import '../Css/Signin.css'

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
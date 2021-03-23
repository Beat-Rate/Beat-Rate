import React from 'react';
import '../Css/Signup.css';
import SignUpHeader from "../Components/SignUpHeader"
import BottomForm from '../Components/BottomForm';
import ConfirmDeletionPopup from '../Components/ConfirmDeletionPopup';

export default class SignUp extends React.Component{   
  
    render(){
        return(
            <>
            <center id = "maincenter"  >
                <SignUpHeader/>
                <BottomForm/>
                <ConfirmDeletionPopup/>
            </center>
            </>
        );
    }
}
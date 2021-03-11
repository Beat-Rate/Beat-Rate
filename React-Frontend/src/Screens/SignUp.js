import React from 'react';
import '../App.css';
import BottomForm from '../Components/BottomForm';
import TRButton from '../Components/TRButton';
import * as firebase from 'firebase';

export default class SignUp extends React.Component{   
    toSignIn(){
        window.location.href="/signin"
    }

    render(){
        return(
            <div className="lo-parent">
                <TRButton title="Login" onClick={()=>{this.toSignIn()}}/>
                
                <div className="text-body"><br/>
                <h2>Get Rated ⭐️</h2>
                <p>Upload your music anonymously and get honest and unfiltered feedback.</p>
                <br/>
                <small>*By creating an account with Beat Rated<br/>you accept our terms of use and privacy policy. </small>
                </div>
            <BottomForm/>
            </div>
        );
    }
}
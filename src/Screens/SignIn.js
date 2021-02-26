import React from 'react';
import '../App.css';
import TRButton from '../Components/TRButton';
import BottomForm from '../Components/BottomForm';

export default class SignIn extends React.Component{
    toSignUp(){
        window.location.href="/"
    }

    render(){
        return(
            <div className="lo-parent">
                <TRButton title="Sign Up" onClick={()=>{this.toSignUp()}}/>

                <div className="text-body"><br/>
                <h2>Get Rated ⭐️</h2>
                <p>Welcome back.</p>
                </div>
                <BottomForm/>
            </div>
        );
    }
}
import React from 'react';
import '../Css/BottomForm.css';
import AlertBox from '../Components/AlertBox';
import firebase from 'firebase/app';
import init from "../Components/FirebaseInit.js";

export default class BottomForm extends React.Component{
    constructor(){
        super();
        this.state = {
            cell: "",
            pass: "",
            text: "Create Account",
            email: "",
            code: "",
            errorText: ""
        }
    }

    componentDidMount(){
        init();
        if(window.location.href.indexOf("/signin") > -1){
            this.setState({text: "Login"});
        }
    }

    showError(errorText){
        this.setState({errorText: errorText});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }

    loginOrCreateAccount(){
        var cell = this.state.cell;
        var pass = this.state.pass;
        var email = this.state.email;

        if(window.location.href.indexOf("/signin") > -1){
            this.login(cell, pass, email);
        }else{
            this.register(cell, pass, email);
        }
    }

    setAuthInformationAndReload(res){
        var user = res.user;
        localStorage.setItem('logged', true);
        localStorage.setItem('user', JSON.stringify(user));
        window.location.replace('http://localhost:3000/')
    }
    
    login(cell, pass){
        console.log(firebase.auth())
        firebase.auth().signInWithEmailAndPassword(`${cell}@ocaccounts.co.za`, pass).then(res=>{
            this.setAuthInformationAndReload(res)

        })
    }

    register(cell, pass, email){
        if(pass.length > 6 & cell.length == 10 & cell.split("")[0] == "0" || cell.split("")[0] == 0){
            try{
            firebase.auth().createUserWithEmailAndPassword(`${cell}@ocaccounts.co.za`, pass).then(res => {
                this.setAuthInformationAndReload(res)
            });
        }catch(e){
            this.showError(e);
            console.log(e)
        }
        }else{
            this.showError("Invalid details. Password must be longer than 6 characters")
        }
    }

    render(){
        return(
            <div id="bottom-form">
                <AlertBox/>
                <center>
                <input className="signup-input" type="number" onInput={(event)=>{this.setState({cell: event.target.value})}} placeholder="Mobile Number"/><br/>
                <input className="signup-input" type="password" placeholder="Password " onInput={(event)=>{this.setState({pass: event.target.value})}}/><br/>
                <button className="affirm-button" onClick={()=>this.loginOrCreateAccount()}>{this.state.text}</button>
                </center>
            </div>
        );
    }
}
import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';
import AlertBox from '../Components/AlertBox';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            songs: <p className="no-songs">Looks like you haven't uploaded any songs yet...</p>,
            errorText: ''
        }
    }

    showError(alertError){
        this.setState({errorText: alertError});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }

    render(){
        return(
            <div className="logged-in-container">
                <AlertBox message={this.state.errorText}/>
                <Upper pageTitle="Your Songs"/>
                <br/>
                <div className="main-body">
                <center>
                <div className="songs-container"><br/>
                {this.state.songs}
                </div>
                </center>
                </div>
                <MainCTA onClick={()=>{window.location.href = "/upload"}} buttonTitle="Upload Song"/>
            </div>

        );
    }
}
import React from 'react';
import "../Css/DesktopHome.css";
import logo from "../Components/Images/logowithnobg.png";
import DesktopBottomBar from '../Components/DesktopBottomBar.js';
import HomeFunctionality from '../Components/HomeFunctionality.js';
import DesktopSongListComp from '../Components/DesktopSongListComp.js';
import RenamePopup  from "../Components/RenamePopup.js";
import Footer from '../Components/footer.js';
import CRUDActionResponse from '../Components/CRUDActionResponse';
import successlogo from '../Components/Images/SuccessIcon.png';
import errorlogo from '../Components/Images/ErrorIcon.png';
export default class DesktopHomeScreen extends React.Component {


    constructor(){
        super();
        this.state = {
            songList : []
        }
        this.functionality = new HomeFunctionality(this);
    }
    componentDidMount(){
        this.functionality.gatherData();
    }
    render() {

        
        return (
            <>
            <div id = "desktop-parent">
                <img id = "desktop-logo" src = {logo}></img>
                <h2 id = "desktop-songs-header"> My Songs</h2>
   
                <DesktopBottomBar/>
                <h1 
                    style = {{display: (this.state.songList.length > 0?  "none":"block" )}}
                    id = "no-song-msg">Looks like you haven't uploaded any songs yet... </h1>
                <div id = "desktop-list-container">
                    {this.state.songList.map(song =>{
                        return <DesktopSongListComp song = {song}/>
                    })}
                </div>
            </div>
            <Footer/>
            <RenamePopup/>
            <CRUDActionResponse 
                        id = "crud-success-home"
                        img = {successlogo} 
                        message = "Process Successfully Completed, You can now close this dialog."
                        bttnLabel = "Got it"
                        state = {this.state.success_showing}
                        />
                        
            <CRUDActionResponse 
                         id = "crud-error-home"
                        state = {this.state.error_showing}
                        img = {errorlogo}
                        message = "Opps! an error occurred, Please try again"
                        bttnLabel = "Got it"/>
                    

            </>
        )
    }
}

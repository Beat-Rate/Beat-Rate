import React from 'react';
import "../Css/DesktopHome.css";
import logo from "../Components/Images/logowithnobg.png";
import DesktopBottomBar from '../Components/DesktopBottomBar';
export default class DesktopHomeScreen extends React.Component {


    constructor(){
        super();
        this.state = {
            songList : []
        }
    }
    render() {

        
        return (
            
            <div id = "desktop-parent">
                <img id = "desktop-logo" src = {logo}></img>
                <h2 id = "desktop-songs-header"> My Songs<h3 id = "desktop-songs-count">{this.state.songList.length}</h3></h2>
                <div id = "desktop-list-container">

                </div>
                <DesktopBottomBar/>
            </div>
        )
    }
}

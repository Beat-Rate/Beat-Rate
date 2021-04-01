import React from 'react';
import "../Css/DesktopHome.css";
import logo from "../Components/Images/logowithnobg.png";
import DesktopBottomBar from '../Components/DesktopBottomBar.js';
import HomeFunctionality from '../Components/HomeFunctionality.js';
import DesktopSongListComp from '../Components/DesktopSongListComp.js';
import Footer from '../Components/footer.js';
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
            </>
        )
    }
}

import React from 'react';
import "../Css/DesktopHome.css";
import logo from "../Components/Images/logowithnobg.png";
import DesktopBottomBar from '../Components/DesktopBottomBar.js';
import HomeFunctionality from '../Components/HomeFunctionality.js';
import DesktopSongListComp from '../Components/DesktopSongListComp.js';
import Footer from '../Components/footer.js';
import CollectivePopups from "../Components/CollectivePopups.js";
export default class DesktopHomeScreen extends React.Component {


    constructor(){
        super();
        this.state = {
            songList : [],
            rename_displayed : false,
            current_song_handler : null,
            confirm_showing :false , 
            error_showing :false,
            success_showing :false//test
        }
        this.functionality = new HomeFunctionality(this);
        this.setState = this.setState.bind(this);
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
                        return <DesktopSongListComp setparentstate = {this.setState} song = {song}/>
                    })}
                </div>
            </div>
            <Footer/>



            <CollectivePopups
                rename_displayed = {this.state.rename_displayed}
                current_song_handler = {this.state.current_song_handler}
                parent_state = {this.setState}
                size = {this.state.songList.length}
                functionality = {this.functionality}
                confirm_state = {this.state.confirm_showing}
                success_state = {this.state.error_showing}
                error_state = {this.state.success_showing}
                    
            
            />

            </>
        )
    }
}

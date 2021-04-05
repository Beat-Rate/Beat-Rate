import React from 'react';
import playbttn from '../Components/Images/play-img.png';
import "../Css/DesktopSongListComp.css";
import SongHandler from "../SongHandler";
import ListCompFunc from "../Components/ListCompFunctionality.js";
export default class DesktopSongListComp extends React.Component {
    constructor(props){
        super(props);
        this.functionality = new ListCompFunc(this);
        this.song_handler = new SongHandler(
            this.props.id,JSON.parse(localStorage.getItem("user")).uid);


        this.state = {
            data :""
        };
    }

    truncate(str){
     
        return  (str.length > 16) ? str.substr(0, 15) + ".." : str;
    
   
 };

    render() {
        return (
            <div className = "desktop-list-comp">
                <center>
                    <b className = "desktop-list-name">{this.truncate(this.props.song.displayName)}</b>
                    <img
                        src = {playbttn}
                        className = "desktop-play-img"></img>
                        <ul className = "desktop-options">

                            <li onClick = {()=>{ this.functionality.startRename()}}>Rename</li>
                            <li onClick = {()=>{this.functionality.startDeletion()}}>Delete</li>
                            <li onClick = {()=>{this.functionality.promptSongOnGlobal()}}>Increase</li>
                        </ul>
                    

                </center>
                
            </div>
        )
    }
}

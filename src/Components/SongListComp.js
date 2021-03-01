import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";

export default class SongListComp extends React.Component{

    render(){
        return(
            <div className="list-component">
                <b>{this.props.songName}</b>  <img className="list-play-button" src={PlayImage}/>
                <div className="list-controls">
                <button className="list-cta">Rename</button> &nbsp; &nbsp; <button className="list-cta">Delete</button>
                <hr noshade className="list-separator"/>
                </div>
            </div>
        );
    }
}
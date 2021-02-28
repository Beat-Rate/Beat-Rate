import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";

export default class SongListComp extends React.Component{

    render(){
        return(
            <div className="list-component">
                <b>{this.props.songName}</b>  <img src={PlayImage}/>
            </div>
        );
    }
}
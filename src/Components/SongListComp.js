import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";

export default class SongListComp extends React.Component{
    componentDidMount(){
    }
    removeSong(){
                //for every song in all songs
                for (var i=0; i<this.props.songList.length; i++ ){
                    //if the key is the same as this components key delete
                    if(this.props.songList[i].key == this.props.propkey){
                        delete this.props.songList[i]
                        this.props.setparentstate({songList:this.props.songList})
                        return
                    }
                    
                }
  
        
    }
    render(){
        
        return(
            <div className="list-component">
                <b>{this.props.songName}</b>  <img className="list-play-button" src={PlayImage}/>
                <div className="list-controls">
                <button className="list-cta">Rename</button> &nbsp; &nbsp; 
                <button onClick = {()=>{this.removeSong()}} className="list-cta">Delete</button>
                <hr noshade className="list-separator"/>
                </div>
            </div>
        );
    }
}
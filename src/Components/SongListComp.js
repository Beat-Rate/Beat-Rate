import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";
import SongHandler from "../SongHandler"

export default class SongListComp extends React.Component{

    constructor(props){
        super(props);
        this.song_handler = new SongHandler(
            this.props.id,JSON.parse(localStorage.getItem("user")).uid)
    }
    removeSongFromFirebase(){
        this.song_handler.reference.set(null, (error )=>{
            if(error){
            }
            else{
                this.removeSongFromParentList()
                this.props.update()
            }
        })
    }
    removeSongFromParentList(){
        this.props.setparentstate({songList :[]})
    }
    ChangeName(name){
        this.song_handler.changeDisplayName(name, ()=>{
            this.removeSongFromParentList()
            this.props.update()
        } )
    }
    currentSongIndex(){
                //for every song in all songs
                for (var i=0; i<this.props.songList.length; i++ ){
                    //if the key is the same as this components key delete
                    if(this.props.songList[i].key == this.props.id){        
                        return i
                    }
                    
                }
  
        
    }
   
    render(){
        if(this.props.is_paid == true){
            return(
                <div className="list-component">
                    <b>{this.props.songName}</b>  <img className="list-play-button" src={PlayImage}/>
                    <div className="list-controls">
                    <button onClick ={()=>{this.ChangeName("buggy")}} className="list-cta">Rename</button> &nbsp; &nbsp; 
                    <button onClick = {()=>{this.song_handler.placeInGlobal()}} className="list-cta">Delete</button>
                    <hr noshade className="list-separator"/>
                    </div>
                </div>
            );

        }
        else{
    
            return(
                    <div className="list-component">
                        <b>{this.props.songName}</b>  <img className="list-play-button" src={PlayImage}/>
                        <div className="list-controls">
                        <button onClick ={()=>{this.ChangeName("buggy")}} className="list-cta">Rename</button> &nbsp; &nbsp; 
                        <button onClick = {()=>{this.removeSongFromFirebase()}} className="list-cta">Delete</button>
                        <button onClick = {()=>{window.location.href = "/budget/"+this.props.id;}} className ="list-cta" >Pay For Review</button>
                        <hr noshade className="list-separator"/>
                        </div>
                    </div>
                );


            
        }
 
    }
}
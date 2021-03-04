import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";
import SongHandler from "../SongHandler"

export default class SongListComp extends React.Component{

    constructor(props){
        super(props);
        this.song_handler = new SongHandler(
            this.props.id,JSON.parse(localStorage.getItem("user")).uid)
        this.state = {
            editing:false
        }
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
        this.song_handler.changeopacityName(name, ()=>{
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
                <b  style = {{opacity:(this.state.editing? 0:1)}}>{this.props.songName}</b>  

                <img style = {{opacity:(this.state.editing?0:1)}}  
                     className="list-play-button" 
                     src={PlayImage}/>

                <div  style = {{opacity:(this.state.editing? 0:1)}}  
                      className="list-controls">

                    <button style = {{opacity:(this.state.editing? 0:1)}}  
                         onClick = {()=>{this.setState({editing:true})}} 
                        className="list-cta">Rename
                    </button> &nbsp; &nbsp; 

                    <button  
                        style = {{opacity:(this.state.editing? 0:1 )}}
                        onClick = {()=>{this.song_handler.placeInGlobal()}} 
                        className="list-cta">Delete
                    </button>
                   
                    <hr noshade className="list-separator"/>
                </div>
                    <input style = {{opacity:(this.state.editing? 1:0)}}  
                           placeholder = "New Name" 
                          ></input>  
            </div>
            );

        }
        else{
    
            return(
                <div className="list-component">
                    <b  style = {{opacity:(this.state.editing? 0:1)}}>{this.props.songName}</b>  

                    <img style = {{opacity:(this.state.editing?0:1)}}  
                         className="list-play-button" 
                         src={PlayImage}/>

                    <div  style = {{opacity:(this.state.editing? 0:1)}}  
                          className="list-controls">

                        <button style = {{opacity:(this.state.editing? 0:1)}}  
                             onClick = {()=>{this.setState({editing:true})}} 
                            className="list-cta">Rename
                        </button> &nbsp; &nbsp; 

                        <button  
                            style = {{opacity:(this.state.editing? 0:1 )}}
                            onClick = {()=>{this.song_handler.placeInGlobal()}} 
                            className="list-cta">Delete
                        </button>
                        <button
                            style = {{opacity:(this.state.editing? 0:1 )}}
                            onClick = {()=>{window.location.replace("http://localhost:3000/budget/"+this.props.id)}}
                            className= "list-cta"
                        >
                            Pay For Reviews!
                        </button>
                       
                        <hr noshade className="list-separator"/>
                    </div>
                        <input style = {{opacity:(this.state.editing? 1:0)}}  
                               placeholder = "New Name" 
                              ></input>  
                </div>
            );


            
        }
 
    }
}
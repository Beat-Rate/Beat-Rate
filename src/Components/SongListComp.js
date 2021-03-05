import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";
import CancelImage from "../Components/Images/cancel.png"
import ConfirmImage from "../Components/Images/confirm.png"
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
                <b className = "b" style = {{opacity:(this.state.editing? 0:1)}}  >{this.props.songName}</b>  

                <img 
                      
                     className={this.state.editing? "confirm-button":"list-play-button" }
                     src={ this.state.editing? ConfirmImage:PlayImage}/>
                <img
                    style = {{opacity:(this.state.editing? 1:0)}}  
                    className = "cancel-button"
                    src = {CancelImage}                    
                >
                </img>

                <div  
                      className="list-controls">

                    <button style = {{opacity:(this.state.editing? 0:1)}}  
                         onClick = {()=>{this.setState({editing:true})}} 
                        className="list-cta">Rename
                    </button> &nbsp; &nbsp; 

                    <button  
                       style = {{opacity:(this.state.editing? 0:1)}}  
                        onClick = {()=>{this.song_handler.placeInGlobal()}} 
                        className="list-cta">Delete
                    </button>
                    <button
                        style = {{opacity:(this.state.editing? 0:1)}}  
                        onClick = {()=>{}}
                        className= "list-cta"
                    >
                        View Reviews!
                    </button>
                    <input 
                           className = "edit-input" 
                           style = {{opacity:(this.state.editing? 1:0)}}  
                           placeholder = "New Name" 
                          ></input>  
                     
                    <hr style = {{
                        }} noshade className="list-separator"/>

                </div>
               
            </div>
        );



        }
        else{
    
            return(
                <div className="list-component">
                    <b className = "b" style = {{opacity:(this.state.editing? 0:1)}}  >{this.props.songName}</b>  

                    <img 
                          
                         className={this.state.editing? "confirm-button":"list-play-button" }
                         src={ this.state.editing? ConfirmImage:PlayImage}/>
                    <img
                        style = {{opacity:(this.state.editing? 1:0)}}  
                        className = "cancel-button"
                        src = {CancelImage}                    
                    >
                    </img>

                    <div  
                          className="list-controls">

                        <button style = {{opacity:(this.state.editing? 0:1)}}  
                             onClick = {()=>{this.setState({editing:true})}} 
                            className="list-cta">Rename
                        </button> &nbsp; &nbsp; 

                        <button  
                           style = {{opacity:(this.state.editing? 0:1)}}  
                            onClick = {()=>{this.song_handler.placeInGlobal()}} 
                            className="list-cta">Delete
                        </button>
                        <button
                            style = {{opacity:(this.state.editing? 0:1)}}  
                            onClick = {()=>{window.location.replace("http://localhost:3000/budget/"+this.props.id)}}
                            className= "list-cta"
                        >
                            Pay For Reviews!
                        </button>
                        <input 
                               className = "edit-input" 
                               style = {{opacity:(this.state.editing? 1:0)}}  
                               placeholder = "New Name" 
                              ></input>  
                         
                        <hr style = {{
                            }} noshade className="list-separator"/>

                    </div>
                   
                </div>
            );


            
        }
 
    }
}
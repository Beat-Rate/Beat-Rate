import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";
import SongHandler from "../SongHandler"

export default class SongListComp extends React.Component{

    constructor(props){
        super(props);
        this.song_handler = new SongHandler(
            this.props.id,JSON.parse(localStorage.getItem("user")).uid);
        this.state = {
            data :""
        };
    }
    removeSongFromFirebase(){
        this.song_handler.reference.set(null, (error )=>{
            if(error){
            }
            else{
                this.removeSongFromParentList();
                this.props.update();
            }
        })
    }
    //setting list empty because firebase re-renders
    removeSongFromParentList(){
        this.props.setparentstate({songList :[]});
    }
    ChangeName(){
        this.song_handler.changeDisplayName(this.state.data,()=>{
            this.removeSongFromParentList();
            this.props.update();
            this.state.editing =false;
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
                <b className = "b"   >{this.props.songName}</b>  

                <img 
                      
                     className="list-play-button" 
                     src={PlayImage}/>
          

                <div  
                      className="list-controls">

                    <button 
                        
                        className="list-cta">Rename
                    </button> &nbsp; &nbsp; 

                    <button  
                     
                        onClick = {()=>{this.removeSongFromFirebase()}} 
                        className="list-cta">Delete
                    </button>
                    <button
              
                        
                        className= "list-cta"
                    >
                        View Reviews!
                    </button>
                    <input 
                           className = "edit-input"  
                           placeholder = "New Name" 

                          ></input>  
                     
            

                </div>
               
            </div>
        );



        }
        else{
    
            return(
                //window.location.replace("http://localhost:3000/budget/"+this.props.id)
                <div className="list-component">
                    <b className = "b"  >{this.props.songName}</b>  

                    <img 
                          
                         className={"list-play-button" }
                         src={PlayImage}
                         />
                         
                

                    <div  
                          className="list-controls">

                    <ul className = "song-options">

                        <li className = "song-options-grey" 
                        onClick = {()=>{
                            this.props.setparentstate({rename_displayed:true,
                                current_song_handler: this.song_handler})

                        }}
                        >Rename</li>
                        <li className = "song-options-grey">Delete</li>
                        <li className = "song-options-red">Pay</li>
                    </ul>
                  

                    </div>
                   

                </div>
            );


            
        }
 
    }
}
import React from "react";
import "../App.css";
import PlayImage from "../Components/Images/play-img.png";
import SongHandler from "../SongHandler";
import ListCompFunc from "../Components/ListCompFunctionality.js";
export default class SongListComp extends React.Component{

    constructor(props){
        super(props);
        this.song_handler = new SongHandler(
            this.props.id,JSON.parse(localStorage.getItem("user")).uid);


        this.state = {
            data :""
        };
        this.functionality = new ListCompFunc(this);
        
    }

   
    render(){
        if(this.props.is_paid == true){
            return(
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
                    this.functionality.startRename()

                }}
                    >Rename</li>
                    <li className = "song-options-grey" onClick = {()=>{this.functionality.startDeletion()}}>Delete</li>
                    <li className = "song-options-red" >Increase </li>
                </ul>
              

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
                            this.functionality.startRename()

                        }}
                        >Rename</li>
                        <li className = "song-options-grey" onClick = {()=>{this.functionality.startDeletion()}}>Delete</li>
                        <li className = "song-options-red" >Get Reviews</li>
                    </ul>
                  

                    </div>
                   

                </div>
            );


            
        }
 
    }
}
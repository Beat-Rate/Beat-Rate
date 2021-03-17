import React from 'react';
import orangedot from '../Components/Images/orangedot.png';
import pinkdot from '../Components/Images/pinkdot.png';
import bluedot from '../Components/Images/bluedot.png';
import logo from '../Components/Images/logowithnobg.png'
import '../Css/SelectReviewSong.css'
export default class SelectReviewSong extends React.Component {



    constructor(){
        super();
     
    }
    render() {

        



            if(this.props.songList == null){
                return(
                <div id = "select-song-blur">
                    <h1>
                        No Songs!!
                    </h1>
                </div>

                );

            }
            else{
                return(
                <div  id = "select-song-blur" style = {{display : "none"}}>
                    
                        
                            <img id ="logo" src = {logo}></img>
                  
                    <div id = "review-song-container">
                
                        {
                            this.props.songList.map(song=>{
                  
                                    if(song.reviews != null){
                                        
                                        return(
                                            <div className = "review-song">
                                                <h1 className = "song-name">Song Name </h1>
                                                <h1 className = "stats">
                                                    <img src = {orangedot}></img>
                                                   6 Completed Reviews {}
                                                </h1>
                                                <h1 className = "stats">
                                                    <img src = {pinkdot} ></img>
                                                   6 Reviews left {}
                                                </h1>
                                                <h1 className = "stats">
                                                    <img src = {bluedot} ></img>
                                                   Status : Active {}
                                                </h1>
                                               
                                                
                                            </div>
                                        );
                                    }    
                                
                            })
                        }    
                        
                    </div>                
                    <button id = "close-review-select">Close</button>
                </div>
                );
                }
        
    }
}

import React from 'react';
import orangedot from '../Components/Images/orangedot.png';
import pinkdot from '../Components/Images/pinkdot.png';
import purpledot from '../Components/Images/purpledot.png';
import '../Css/SelectReviewSong.css'
export default class SelectReviewSong extends React.Component {



    constructor(){
        super();
        this.state = {
            reviews_present :false
        }
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
                <div id = "select-song-blur">
                    <div id = "review-song-container">
                    <h1 style = {{display:(this.state.reviews_present? "none":"block")}}> No Reviews!!</h1>
                        {
                            this.props.songList.map(song=>{
                  
                                    if(song.reviews != null){
                                        if(this.state.reviews_present == false){
                                            this.setState({reviews_present : true});
                                        }
                                        return(
                                            <div className = "review-song">
                                                <h1>Song Name </h1>
                                                <h1>
                                                    <img src = {orangedot}></img>
                                                    Completed Reviews {}
                                                </h1>
                                                <h1>
                                                    <img src = {pinkdot} ></img>
                                                    Reviews left {}
                                                </h1>
                                                <h1>
                                                    <img src = {purpledot} ></img>
                                                    status {}
                                                </h1>
                                            </div>
                                        );
                                    }    
                                
                            })
                        }    
                        
                    </div>                
                </div>
                );
                }
        
    }
}

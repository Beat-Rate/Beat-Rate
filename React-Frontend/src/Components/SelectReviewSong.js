import React from 'react';
import orangedot from '../Components/Images/orangedot.png';
import pinkdot from '../Components/Images/pinkdot.png';
import purpledot from '../Components/Images/purpledot.png';
export default class SelectReviewSong extends React.Component {
    render() {
        return (
            <div id = "select-song-blur">
                <div id = "review-song-container">
                    {
                        this.props.songList.map(song=>{
                            return (

                                <div className = "review-song">
                                    <h1>Song Name </h1>
                                    <h1><img></img></h1>

                                    


                                </div>
                            );
                        })

                    }    
                    
                </div>                
            </div>
        )
    }
}

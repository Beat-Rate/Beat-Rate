import React from 'react'
import musicSymbol from "../Components/Images/song-vector.png"
export default class SelectReviewSong extends React.Component {
    render() {
        return (
            <div id = "select-song-blur">
                <div id = "review-song-container">
                    {
                        this.props.songList.map(song=>{
                            return (

                                <div id = "reiew-song">
                                    <h1>Song Name<img src = {musicSymbol}></img>  </h1>
                                    


                                </div>
                            );
                        })

                    }    
                    
                </div>                
            </div>
        )
    }
}

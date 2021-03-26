import React from 'react';
import playbttn from '../Components/Images/play-img.png';
export default class DesktopSongListComp extends React.Component {
    render() {
        return (
            <div className = "desktop-list-comp">
                <b></b>
                <img
                    src = {playbttn}
                    className = "desktop-play-img"></img>
                


                
            </div>
        )
    }
}

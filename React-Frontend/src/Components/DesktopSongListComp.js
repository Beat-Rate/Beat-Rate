import React from 'react';
import playbttn from '../Components/Images/play-img.png';
import "../Css/DesktopSongListComp.css";

export default class DesktopSongListComp extends React.Component {
    truncate(str){
     
        return  (str.length > 16) ? str.substr(0, 15) + ".." : str;
    
   
 };

    render() {
        return (
            <div className = "desktop-list-comp">
                <center>
                    <b className = "desktop-list-name">{this.truncate(this.props.song.displayName)}</b>
                    <img
                        src = {playbttn}
                        className = "desktop-play-img"></img>
                        <ul className = "desktop-options">

                            <li>Rename</li>
                            <li>Delete</li>
                            <li>Increase</li>
                        </ul>
                    

                </center>
                
            </div>
        )
    }
}

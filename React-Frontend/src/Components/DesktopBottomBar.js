import React  from 'react'
import "../Css/DesktopBottomBar.css"
import review from '../Components/Images/review-vector.png';
import upload  from '../Components/Images/upload-vector.png';
import wallet from '../Components/Images/wallet-vector.png';
export default class DesktopBottomBar extends React.Component {
    render() {
        return (
            <div id = "desktop-bottom-bar">
                <div id = "review-btm" className = "desktop-buttons-btm">
                     <img src = {review}></img>
                     <h5>0</h5>
                </div>
                <div 
                    id = "upload-btm" 
                    className = "desktop-buttons-btm"
                    onClick = {()=>{window.location.replace("/upload");}}
                    >
                     <img src = {upload}></img>  
                     <h5>{this.props.song_len}</h5>
                </div>
               
                <div id = "wallet-btm" className = "desktop-buttons-btm" >
                    <img src = {wallet}></img>
                    <h5>0</h5>
                </div>
                
            </div>
        )
    }
}

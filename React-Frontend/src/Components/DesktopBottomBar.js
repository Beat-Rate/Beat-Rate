import React  from 'react'
import "../Css/DesktopBottomBar.css"
import review from '../Components/Images/review-vector.png';
import upload  from '../Components/Images/upload-vector.png';
import wallet from '../Components/Images/wallet-vector.png';
export default class DesktopBottomBar extends React.Component {
    render() {
        return (
            <div id = "desktop-bottom-bar">
                <div>
                     <img src = {review}></img>
                </div>
                <div>
                     <img src = {upload}></img>  
                </div>
               
                <div>
                    <img src = {wallet}></img>
                </div>
                
            </div>
        )
    }
}

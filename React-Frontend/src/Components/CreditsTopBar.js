import React from 'react'
import avaliable_credit_icon from '../Components/Images/availablecredits.png';

export default class CreditsTopBar extends React.Component {
    render() {
        return (
            <div id  = "credits-topbar">
                <h1>Available Credits<img src  = {avaliable_credit_icon}></img></h1>
                <h2>{this.props.credits}</h2>
                
                
            </div>
        )
    }
}

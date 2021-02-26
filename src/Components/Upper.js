import React from 'react';
import image from '../Components/Images/menu.png';

export default class Upper extends React.Component{

    render(){
        return(
            <div className="top-bar">
            <h4 className="credits"><span id="credit-count">20</span> Upload Coins</h4>
            <img src={image} id="menu"/>
            <br/>
            <h2>{this.props.pageTitle}</h2>
            </div>
        );
    }

}
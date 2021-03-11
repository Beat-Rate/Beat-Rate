import React from 'react';
import image from '../Components/Images/menu.png';

export default class Upper extends React.Component{

    render(){
        return(
            <div className="top-bar">
          
            <br/>
            <h2>{this.props.pageTitle}</h2>
            <h4>.</h4>
            <h3>{this.props.size}</h3>
            </div>
        );
    }

}
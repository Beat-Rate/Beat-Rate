import React from 'react';
import '../App.css';

export default class TRButton extends React.Component{
    render(){
        return(
            <button className="topright-button" onClick={this.props.onClick}>
            {this.props.title}
            </button>
        );
    }
}
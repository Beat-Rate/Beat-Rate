import React from 'react';

export default class MainCTA extends React.Component{
    render(){
        return(
            <button className="main-cta" onClick={this.props.onClick}>{this.props.buttonTitle}</button>
        );
    }
}
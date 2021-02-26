import React from 'react';
import '../App.css';

export default class PlayModal extends React.Component{

render(){
    return(
        <div className="play-parent-hidden">
            <center>
                <div className="play-modal">
                    <h3>Preview</h3><br/>
                    <img src={this.props.image} />
                    <p>{this.props.audioTitle}</p>
                    <button className="no-bg cancel" onClick={this.props.onClose}>Cancel</button>
                    <button className="no-bg affirm" onClick={this.props.onContinue}>Continue</button>
                </div>
            </center>
        </div>
    );
}

}
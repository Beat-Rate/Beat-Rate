import React from 'react';
import '../App.css';

var genres = ["hiphop" , "RB"]

export default class PlayModal extends React.Component{

render(){
    return(
        <div className="play-parent-hidden">
            <center>
                <div className="play-modal">
                    <h3>Preview</h3><br/>
                    <img src={this.props.image} />
                    <p>{this.props.audioTitle}</p><br/>
                    <select type="text" onChange={this.props.genreSelect} className="default-input pullup-minor">
                        {
                        genres.map(genre => {
                            return <option value={genre}>{genre}</option>
                        })
                        }
                    </select><br/>
                    <button className="no-bg cancel" id="cancel" onClick={this.props.onClose}>Cancel</button>
                    <button className="no-bg affirm" id="continue" onClick={this.props.onContinue}>Continue</button>
                </div>
            </center>
        </div>
    );
}
}
import React, { Component } from 'react'
// for testing proof of concept
import "../Css/PlaceOnGlobal.css";
export default class PlaceOnGlobal extends Component {
    render() {
        return (
            <div style = {{display : (this.props.state? "block" : "none")}} id = "place-on-global">

                <h3>Are you sure you would like to gain reviews?</h3>
                <center>
                    <button onClick = {()=>{this.props.song_handler.placeInGlobal(this.props.setparentstate)}} id = "yespo">Yes</button>
                    <button 
                        id = "nopo" 
                        onClick ={()=>{this.props.setparentstate({global_popup_showing:false})}}>
                        No
                    </button>
                </center>
                
            </div>
        )
    }
}

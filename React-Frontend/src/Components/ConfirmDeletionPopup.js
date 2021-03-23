import React from 'react'
import logo from '../Components/Images/logowithnobg.png';
export default class ConfirmDeletionPopup extends React.Component {
    render() {
        return (
            <div 
                style = {{display: (this.props.state? "block":"none")}}
                id = "Confirm-Wrapper">
                <div>
                    <img src = {logo}></img>
                    <h1>Are you sure you would like to delete this {this.props.type}?</h1>
                    <button>Delete</button>
                    <button id = "cancel"
                        onClick = {()=>{
                            this.props.setparentstate({confirm_showing:false})
                        }}
                        >Cancel</button>
                    
                </div>

                
            </div>
        )
    }
}

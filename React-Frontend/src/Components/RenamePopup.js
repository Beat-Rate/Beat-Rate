import React from 'react'
import '../Css/RenamePopup.css'
export default class RenamePopup extends React.Component {
    constructor(){
        super();
        this.state = {
            text : ''
            
        };
    }

    render() {
        return (
            <div
             
                id = "rename-blur"
                style = {{display:(this.props.display_state? "block":"none")} }>
                <div id = "RenamePopup">
                    <h1>Rename Song</h1>
                    <input id = "newNameInput"  placeholder = "New Name"></input>
                    <div  id = "RenamePopupButtons">
                        <button>Confirm</button>
                        <button onClick = {()=>{
                            this.props.setparentstate({rename_displayed:false})
                            console.log(this.props.current_song)}}>Cancel</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

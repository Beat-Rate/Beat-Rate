import React from 'react'

export default class RenamePopup extends React.Component {
    constructor(){
        this.state = {
            text = ''
        };
    }

    render() {
        return (
            <div id = "rename-blur">
                <div id = "RenamePopup">
                    <h1>{this.props.name}</h1>
                    <input id = "newNameInput"  placeholder = "New Name"></input>
                    <div  id = "RenamePopupButtons">
                        <button>Confirm</button>
                        <button>Cancel</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

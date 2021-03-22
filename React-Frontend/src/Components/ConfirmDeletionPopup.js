import React from 'react'

export default class ConfirmDeletionPopup extends React.Component {
    render() {
        return (
            <div id = "Confirm-Wrapper">
                <div>
                    <h1>Are you sure you would like to delete this song?</h1>
                    <button>Delete</button>
                    <button>Cancel</button>
                    
                </div>

                
            </div>
        )
    }
}

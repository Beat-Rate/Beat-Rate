import React, { Component } from 'react'
import RenamePopup  from "../Components/RenamePopup.js";
import CRUDActionResponse from '../Components/CRUDActionResponse';
import successlogo from '../Components/Images/SuccessIcon.png';
import errorlogo from '../Components/Images/ErrorIcon.png';
import ConfirmDeletionPopup from '../Components/ConfirmDeletionPopup';
export default class CollectivePopups extends Component {
    render() {
        return (
            <>
            <RenamePopup
                display_state = {this.props.rename_displayed}
                current_song = {this.props.current_song_handler}
                setparentstate = {this.props.parent_state}
                size = {this.props.size}
            
            />
            <center>
            <ConfirmDeletionPopup 
                        fun = {()=>{this.props.functionality.removeSongFromFirebase()}} 
                        type = "song" state = {this.props.confirm_state}
                        setparentstate = {this.props.parent_state}/>
            <CRUDActionResponse 
                        id = "crud-success-home"
                        img = {successlogo} 
                        fun = {()=>{this.props.parent_state({success_showing :false})}}
                        message = "Process Successfully Completed, You can now close this dialog."
                        bttnLabel = "Got it"
                        state = {this.props.success_state}
                        />
                        
            <CRUDActionResponse 
                         id = "crud-error-home"
                        state = {this.props.error_state}
                        img = {errorlogo}
                        fun = {()=>{this.props.parent_state({error_showing :false})}}
                        message = "Opps! an error occurred, Please try again"
                        bttnLabel = "Got it"/>
            </center>
                        </>
        )
    }
}

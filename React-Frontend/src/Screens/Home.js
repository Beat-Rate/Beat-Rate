import React from 'react';
import Upper from '../Components/Upper';

import AlertBox from '../Components/AlertBox';
import firebase from 'firebase/app';
import SongListComp from '../Components/SongListComp';
//images
import successlogo from '../Components/Images/SuccessIcon.png';
import errorlogo from '../Components/Images/ErrorIcon.png';
//css
import "../Css/BottomBar.css";
import "../Css/mySongsHeader.css";
import "../Css/SongOptions.css";
import "../Css/ListComponent.css"
import RenamePopup from '../Components/RenamePopup';
import SelectReviewSong from '../Components/SelectReviewSong';
import ConfirmDeletionPopup from '../Components/ConfirmDeletionPopup';
import CRUDActionResponse from '../Components/CRUDActionResponse';
import HomeFunctionality from '../Components/HomeFunctionality.js';
var { v4: uuidv4 } = require('uuid');
export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            songList: [],
            rename_displayed : false,
            current_song_handler : null,
            confirm_showing :false , 
            error_showing :false,
            success_showing :false//test
        }
        this.setState = this.setState.bind(this);
        this.functionality = new HomeFunctionality(this);
    }


    
    componentDidMount(){
       this.functionality.gatherData();
  
    }
  
    
    truncate(str){
     
             return  (str.length > 28) ? str.substr(0, 27) + ".." : str;
         
        
      };

    render(){

        return(
            <div className="logged-in-container">
                <AlertBox message={this.state.errorText} />
                <h2 id = "my-songs-header"> My Songs<h3 id = "my-songs-count">{this.state.songList.length}</h3></h2>
                <div className="main-body">
                    
                    <center>
                        <div className="songs-container">
                            {
                            this.state.songList.length > 0 ?
                            this.state.songList.map(thisSong=> {
                                return (<SongListComp songName={
                                    this.truncate(thisSong.displayName)} 
                                key = {uuidv4()}
                                is_paid = {true}
                                id = {thisSong.key} 
                                setparentstate = {this.setState}
                                />);
                            })
                            :
                            <p className="no-songs">Looks like you haven't uploaded any songs yet...</p>
                            }
                        
                        </div>
                    </center>
                </div>
                <Upper  />
                <RenamePopup display_state = {this.state.rename_displayed}
                             current_song = {this.state.current_song_handler}
                             setparentstate = {this.setState}
                             size = {this.state.songList.length}
                             />
                <SelectReviewSong songList = {this.state.songList}/>
                <center>
                    <ConfirmDeletionPopup 
                        fun = {()=>{this.functionality.removeSongFromFirebase()}} 
                        type = "song" state = {this.state.confirm_showing}
                        setparentstate = {this.setState}/>
                    <CRUDActionResponse 
                        id = "crud-success-home"
                        img = {successlogo} 
                        message = "Process Successfully Completed, You can now close this dialog."
                        bttnLabel = "Got it"
                        state = {this.state.success_showing}
                        />
                        
                    <CRUDActionResponse 
                        id = "crud-error-home"
                        state = {this.state.error_showing}
                        img = {errorlogo}
                        message = "Opps! an error occurred, Please try again"
                        bttnLabel = "Got it"/>
                    
                </center>
            </div>

        );
    }
}
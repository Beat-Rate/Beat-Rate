import React from 'react';
import Upper from '../Components/Upper';

import AlertBox from '../Components/AlertBox';
import SongListComp from '../Components/SongListComp';
//css
import "../Css/BottomBar.css";
import "../Css/mySongsHeader.css";
import "../Css/SongOptions.css";
import "../Css/ListComponent.css"
import CollectivePopups from "../Components/CollectivePopups.js";
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
                <CollectivePopups
                    rename_displayed = {this.state.rename_displayed}
                    current_song_handler = {this.state.current_song_handler}
                    parent_state = {this.setState}
                    size = {this.state.songList.length}
                    functionality = {this.functionality}
                    confirm_state = {this.state.confirm_showing}
                    success_state = {this.state.error_showing}
                    error_state = {this.state.success_showing}
                    />
            </div>

        );
    }
}
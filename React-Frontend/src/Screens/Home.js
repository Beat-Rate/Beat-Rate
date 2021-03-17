import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';
import AlertBox from '../Components/AlertBox';
import firebase from 'firebase/app';
import SongListComp from '../Components/SongListComp';
import localStorageLeft from '../Components/StorageCalculator'
//css
import "../Css/BottomBar.css";
import "../Css/mySongsHeader.css";
import "../Css/SongOptions.css";
import "../Css/ListComponent.css"
import RenamePopup from '../Components/RenamePopup';
var { v4: uuidv4 } = require('uuid');
export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {

            errorText: '',
            songList: [],
            rename_displayed : false,
            current_song_handler : null
        }
        this.setState = this.setState.bind(this);
    }

    showError(alertError){
        this.setState({errorText: alertError});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }
    gatherData(){
       
        var thisUser = JSON.parse(localStorage.getItem("user")).uid;
        firebase.database().ref("Users/"+thisUser+"/Songs").on("value", data => {
            let arr = []
            var songList = data.val();
            if(songList == null || songList == 'null'){
                //leave empty
            }else{
            for(var key in songList){
                //sets key of the object
                songList[key].key = key
                arr.push(songList[key]);
            }
            this.setState({songList: arr});
        }
        })
    }
    componentDidMount(){
       this.gatherData();
       console.log("ok");

    }
    
    truncate(str){
         if(window.screen.width>800){
            return (str.length > 78) ? str.substr(0, 77) + ".." : str;
         } 
         else{
             return  (str.length > 28) ? str.substr(0, 27) + ".." : str;
         }
        
      };

    render(){

        return(
            <div className="logged-in-container">
                <AlertBox message={this.state.errorText} />
                <h2 id = "my-songs-header"> My Songs<h3 id = "my-songs-count">{this.state.songList.length}</h3></h2>
                


                <div className="main-body">
                    <center>
                        <div className="songs-container">
                            <br/>
                            {
                             
                            this.state.songList.length > 0 ?

                            this.state.songList.map(thisSong=> {
                                return (<SongListComp songName={
                                    this.truncate(thisSong.displayName)} 
                                key = {uuidv4()}
                                is_paid = {false}
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
                
            </div>

        );
    }
}
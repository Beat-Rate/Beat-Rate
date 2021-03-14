import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';
import AlertBox from '../Components/AlertBox';
import firebase from 'firebase/app';
import SongListComp from '../Components/SongListComp';
import localStorageLeft from '../Components/StorageCalculator'
var { v4: uuidv4 } = require('uuid');
export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            songs: [],
            errorText: '',
            songList: []
        }
        this.setState = this.setState.bind(this);
    }

    showError(alertError){
        this.setState({errorText: alertError});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }
    gatherData(){
        var thisUser = JSON.parse(localStorage.getItem("user")).uid;
        let arr = []
        firebase.database().ref("Users/"+thisUser+"/Songs").on("value", data => {
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
       this.gatherData()
    }
    
    truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + "..." : str;
      };

    render(){
        console.log(localStorageLeft())
        return(
            <div className="logged-in-container">
                <AlertBox message={this.state.errorText} />
                
                <br/>
                <div className="main-body">
                <center>
                <div className="songs-container"><br/>
                {
                this.state.songList.length > 0 ?

                this.state.songList.map(thisSong=> {
                    return (<SongListComp songName={this.truncate(thisSong.displayName, 30)} 
                    key = {uuidv4()}
                    is_paid = {false}
                    id = {thisSong.key} 
                    update = {()=>{this.gatherData()}}
                    setparentstate = {this.setState}
                    songList  = {this.state.songList}
                    removeSong = {this.removeSong}/>);
                })
                :
                <p className="no-songs">Looks like you haven't uploaded any songs yet...</p>
                }
                 
                </div>
                
                </center>
                </div>
                <Upper size ={this.state.songList.length}  pageTitle="Your Songs"/>
            </div>

        );
    }
}
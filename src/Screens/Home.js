import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';
import AlertBox from '../Components/AlertBox';
import firebase from 'firebase/app';
import SongListComp from '../Components/SongListComp';

export default class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            songs: [],
            errorText: '',
            songList: []
        }
    }

    showError(alertError){
        this.setState({errorText: alertError});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }

    componentDidMount(){
        var thisUser = JSON.parse(localStorage.getItem("user")).uid;
        var songArray = this.state.songs;
        firebase.database().ref("Users/"+thisUser+"/Songs").on("value", data => {
            var songList = data.val();
            if(songList == null || songList == 'null'){
                //leave empty
            }else{
            for(var key in songList){
                songArray.push(songList[key]);
                this.setState({songList: songArray});
            }
        }
        })
    }

    truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + "..." : str;
      };

    render(){
        return(
            <div className="logged-in-container">
                <AlertBox message={this.state.errorText}/>
                <Upper pageTitle="Your Songs"/>
                <br/>
                <div className="main-body">
                <center>
                <div className="songs-container"><br/>
                {
                this.state.songList.length > 0 ?

                this.state.songList.map(thisSong=> {
                    return (<SongListComp songName={this.truncate(thisSong.displayName, 35)}/>);
                })
                :
                <p className="no-songs">Looks like you haven't uploaded any songs yet...</p>
                }
                </div>
                </center>
                </div>
                <MainCTA onClick={()=>{window.location.href = "/upload"}} buttonTitle="Upload Song"/>
            </div>

        );
    }
}
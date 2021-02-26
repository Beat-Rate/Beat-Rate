import React from 'react';
import Upper from '../Components/Upper';
import MainCTA from '../Components/MainCTA';
import UploadIcon from '../Components/Images/upload.png';
import PlayModal from '../Components/PlayModal';
import firebase from 'firebase';
import Loader from '../Components/Images/loader.gif';
import Wave from "../Components/Images/wave.png";
import Done from "../Components/Images/okay.gif";
import Complete from "../Components/Images/complete.gif";

var playingAudio;

export default class Upload extends React.Component{

    constructor(){
        super();
        this.state = {
            uploadStatus: '',
            image: Wave,
            audioTitle: '',
            errorText: ""
        }
    }

    upload(target){
        var url = URL.createObjectURL(target.files[0]);
        var audioFile =target.files[0];
        var audio = new Audio(url);
        this.showModal(audio, audioFile);
        console.log(audio);
    }

    showModal(audio, audioFile){
        var thisAudio = new Audio(audio);
        this.setState({audioTitle: audioFile.name});
        playingAudio = audio;
        playingAudio.play();
        document.getElementsByClassName("play-parent-hidden")[0].classList.toggle("play-parent");
    }

    uploadSong(){
        this.processUpload(document.getElementById("chosen-file").files[0], 'reverend');
        console.log("uploading song...");
        console.log(playingAudio);
        playingAudio.pause();
    }

    showError(alertError){
        this.setState({errorText: alertError});
        document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
    }

    hideModal(){
        playingAudio.pause();
        document.getElementsByClassName("play-parent-hidden")[0].classList.toggle("play-parent");   
    }

    processUpload(file, uid){
        this.setState({image: Loader})
        //document.getElementsByClassName("loader-hidden")[0].classList.toggle("loader-showing");
        console.log(uid);
        var fd = new FormData();
        console.log(file);
        fd.append("chosen-file",file);
        fd.append("user_id", uid);
        var xhr = new XMLHttpRequest();
        
        xhr.open("POST", "https://onecab.co.za/share/upload.php?user_id="+uid);
        
        xhr.onprogress = (e) => {
            if(e.lengthComputable){
                console.log(e.loaded, e.total);
            }else{
                console.log("can't compute")
            }
        }

        xhr.onreadystatechange = () => {
            if(xhr.readyState == "4" & xhr.status == "200"){
                //do nothing since it's being handled in the onload event handler
            }else{
                this.showError("There was an error " + xhr.status); 
            }
        }
        xhr.onload = () => {
                this.setState({image: Complete});
                setTimeout(()=>{document.getElementsByClassName("play-parent-hidden")[0].classList.toggle("play-parent");
                this.setState({image: Wave});window.location.href = "/budget";}, 2200);
                
        };
        
        xhr.send(fd);
    }

    

    render(){
        return(
            <div className="logged-in-container">
                <PlayModal image={this.state.image} onClose={()=>{this.hideModal()}} onContinue={()=>{this.uploadSong()}} audioTitle={this.state.audioTitle}/>
                <Upper pageTitle="Upload Song"/>
                <br/>
                
                <div className="main-body">
                <center>
                <div className="songs-container"><br/>
                <input type="file" id="chosen-file" name="chosen-file" accept="audio/mp3" className="audio-selector" onChange={(event)=>{this.upload(event.target)}}/>

                <label for="chosen-file" name="chosen-file">
                <div class="upload-song">
                <img src={UploadIcon} width="130px"/>
                <br/><br/><br/>
                <p><b>👆 tap to upload</b></p>
                </div>
                </label>
                </div>
                </center>
                </div>
                <MainCTA buttonTitle="Continue"/>
            </div>

        );
    }
}

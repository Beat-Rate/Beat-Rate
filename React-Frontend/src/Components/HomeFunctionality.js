import firebase from 'firebase/app';



export default class HomeFunctionality {

    constructor(parent){
        this.parent = parent;
    }
    gatherData(){
        var thisUser = JSON.parse(localStorage.getItem("user")).uid;
        firebase.database().ref("Users/"+thisUser+"/Songs").on("value", data => {
            let arr = [];
            var songList = data.val();
            if(songList == null || songList == 'null'){
                this.parent.setState({songList:[]});
            }else{
            for(var key in songList){
                //sets key of the object
                //so we can access it in other components
                songList[key].key = key;
                arr.push(songList[key]);
            }
            this.parent.setState({songList: arr});
        }
        })
    }
    removeSongFromFirebase(){
        this.parent.state.current_song_handler.reference.set(null, (error )=>{
            if(error){
            }
            else{
                
             
            }
        })
    }


    

}
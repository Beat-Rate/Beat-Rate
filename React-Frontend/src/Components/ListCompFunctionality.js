export default class ListCompFunc {

    constructor(parent){
        this.parent = parent
    }

    startDeletion(){
        this.parent.props.setparentstate({
            confirm_showing :true,
            current_song_handler :this.parent.song_handler})
    }
    startRename(){
        this.parent.props.setparentstate({rename_displayed:true,
            current_song_handler: this.parent.song_handler})
    }
    currentSongIndex(){
                //for every song in all songs
                for (var i=0; i<this.parent.props.songList.length; i++ ){
                    //if the key is the same as this components key delete
                    if(this.parent.props.songList[i].key == this.parent.props.id){        
                        return i
                    }
                    
                }
  
        
    }
    promptSongOnGlobal(){
        this.parent.props.setparentstate({global_popup_showing :true});
    }
}
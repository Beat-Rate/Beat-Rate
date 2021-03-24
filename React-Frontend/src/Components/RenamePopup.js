import React from 'react'
import '../Css/RenamePopup.css'
export default class RenamePopup extends React.Component {
    constructor(){
        super();
        this.state = {
            text : ''
            
        };
    }
    Rename(){
        //song handler
      
        this.props.current_song.changeDisplayName(this.state.text,()=>{
            this.props.setparentstate({rename_displayed:false})
        });
    }

    render() {
        return (
            <div
             
                id = "rename-blur"
                style = {{display:(this.props.display_state? "block":"none")} }>
                <div id = "RenamePopup">
                    <h1>Rename Song</h1>
                    <input 
                        id = "newNameInput"  
                        onInput={(event)=>{this.setState({text: event.target.value})}}
                        placeholder = "New Name"></input>
                        
                    <div  id = "RenamePopupButtons">
                        <button onClick = {()=>{this.Rename()}}>Confirm</button>
                        <button onClick = {()=>{
                            this.props.setparentstate({rename_displayed:false})
                            console.log(this.props.current_song)}}>Cancel</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

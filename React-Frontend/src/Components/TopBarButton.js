import React from 'react'

function gatherOnClick(parent){
    if (parent.props.id == "upload-topbar"){   
        window.location.replace("/upload")
    }
}

export default class TopBarButton extends React.Component {
    constructor(props){
        super(props);


    }
    render() {
        return (
            <div className = "topbar-buttons"
            id = {this.props.id}
            onClick = {()=>{gatherOnClick(this)}}
        
            >
                <center>
                <img  src = {this.props.image}></img>
          
                </center>
            </div>
        )
    }
}

import React from 'react'



export default class TopBarButton extends React.Component {
    render() {
        return (
            <div className = "topbar-buttons"
            id = {this.props.id}
        
            >
                <img  src = {this.props.image}></img>
                <h5 >{this.props.label}</h5>
            </div>
        )
    }
}

import React from 'react';
import '../Css/CrudResponse.css';
export default class CRUDActionResponse extends React.Component {
    render() {
        return (
            <div
            
                id = {this.props.id}
                style = {{display : (this.props.state?  "block":"none" )}} 
                className = "crud-response">
                <center>
                    <img src = {this.props.img} ></img>
                    <p >{this.props.message}</p>
                    <button onClick = {this.props.fun}>{this.props.bttnLabel}</button>

                </center>
            </div>
        )
    }
}

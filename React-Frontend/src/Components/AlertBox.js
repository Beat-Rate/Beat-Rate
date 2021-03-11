import React from 'react';
import '../App.css';

export default class AlertBox extends React.Component{

closeModal(){
    document.getElementsByClassName("alert-parent-hidden")[0].classList.toggle("alert-parent");
}

render(){
    return(
        <div className="alert-parent-hidden">
            <center><br/><br/>
                <div className="alert-box" style={{top: "40%"}}>
                    <h3>Alert</h3>
                    <p>{this.props.message}</p>
                    <button className="no-bg affirm" onClick={()=>{this.closeModal()}}>Okay</button>
                </div>
            </center>
        </div>
    );
}

}
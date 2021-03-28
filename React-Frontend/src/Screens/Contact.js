import React  from 'react'

import "../Css/Contact.css";
import logo from "../Components/Images/logowithnobg.png";
export default class Contact extends React.Component {
    render() {
        return (
            <div id = "contact-parent-wrapper">


                
                <div id = "contact-parent">
                    <h1>Contact Us</h1>
                    <p>Have an issue/bug to report?  <a href = "https://github.com/Beat-Rate/Beat-Rate/issues">Report Here</a>

                    
                    </p>
                    <img src = {logo}></img>
                    <input placeholder = "Name"></input>
                    <input placeholder = "Email"></input>
                    <textarea placeholder = "Message"></textarea>
                </div>
            </div>
        )
    }
}

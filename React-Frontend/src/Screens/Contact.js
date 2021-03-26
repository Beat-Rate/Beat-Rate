import React  from 'react'

export default class Contact extends React.Component {
    render() {
        return (
            <div id = "contact-parent">
                <h1>Contact Us</h1>
                <p>Have an issue/bug to report?  <a href = "https://github.com/Beat-Rate/Beat-Rate/issues">Report Here</a>
                
                 </p>
                 <input placeholder = "Name"></input>
                 <input placeholder = "Email"></input>
                 <textarea placeholder = "Message"></textarea>
            </div>
        )
    }
}

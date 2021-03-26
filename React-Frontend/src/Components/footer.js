import React from 'react'
import logo from "../Components/Images/logowithnobg.png";
export default class footer extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>
                        <img src = {logo}></img>
                    </li>
                    <li>Contact</li>
                    <li>About
                    </li>

                </ul>
                
            </div>
        )
    }
}

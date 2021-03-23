import React from 'react'
import CreditEntryRow from './CreditEntryRow'
//css
import '../Css/CreditEntry.css'
import CreditEntryBottom from './CreditEntryBottom'
import CreditsTopBar from './CreditsTopBar'
export default class CreditEntry extends React.Component {
    render() {
        return (
            <center>
                <div id = "credit-parent">
                    <CreditsTopBar credits = "100"/>
                    <input
                         id = "creditinput"
                         placeholder = "Credits..."></input>
                    <CreditEntryRow 
                    num1 = "1"
                    num2 = "2"
                    num3 = "3"            
                        />
                    <CreditEntryRow
                    num1 = "4"
                    num2 = "5"
                    num3 = "6"
                    
                    />
                    <CreditEntryRow
                    num1 = "7"
                    num2 = "8"
                    num3 = "9"
                    />
                    <CreditEntryBottom/>
                    <div>
                        <button id = "complete">Continue</button>
                        <button id = "cancel-credit">Cancel</button>
                    </div>
                    
                </div>
            </center>
        )
    }
}

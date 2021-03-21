import React from 'react'
import CreditEntryRow from './CreditEntryRow'
//css
import '../Css/CreditEntry.css'
export default class CreditEntry extends React.Component {
    render() {
        return (
            <div>
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
                
                
            </div>
        )
    }
}

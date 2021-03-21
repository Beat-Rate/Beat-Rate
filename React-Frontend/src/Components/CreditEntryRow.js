import React from 'react'

export default class CreditEntryRow extends React.Component {
    render() {
        return (
            <div className = "credit-entry-row">
                <button className = "num1">{this.props.num1}</button>
                <button className = "num2" >{this.props.num2}</button>
                <button className = "num3">{this.props.num3}</button>                
            </div>
        )
    }
}

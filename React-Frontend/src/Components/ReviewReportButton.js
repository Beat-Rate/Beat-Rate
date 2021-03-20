import React from 'react'

export default class ReviewReportButton extends React.Component {
    render() {
        return (
            <div className = "report-cat-button">
                <div className = "report-cat-img-wrapper">
                    <img 
                    className = "report-cat-img"
                    src = {this.props.img}>

                    </img>
                </div>
                <h2 > {this.props.label}</h2>
                
            </div>
        )
    }
}

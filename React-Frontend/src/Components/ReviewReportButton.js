import React from 'react'

export default class ReviewReportButton extends React.Component {
    render() {
        return (
            <div id = {this.props.id} className = "report-cat-button">
             
                    <img 
                    className = "report-cat-img"
                    src = {this.props.img}>

                    </img>
              
                <h2 > {this.props.label}</h2>
                
            </div>
        )
    }
}

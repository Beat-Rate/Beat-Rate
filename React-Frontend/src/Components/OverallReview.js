import React from 'react'

export default class OverallReview extends React.Component {
    render() {
        return (
            <div className = "overall-review">
                <h3 id = "overall-label">Overall Rating</h3>
                <h1 id = "overall-number">{this.props.rating}</h1>
                <h1 id = "based-on">Based on 23 Reviews</h1>

                
            </div>
        )
    }
}

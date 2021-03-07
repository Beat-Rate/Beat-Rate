import React from 'react'
import Smiling from '../Components/Images/smiling.png'
import Straight from  '../Components/Images/straightface.png'

export default class OverallReview extends React.Component {
    render() {
        return (
            <div className = "overall-review">
                <h3 id = "overall-label">Overall Rating</h3>
                <h1 id = "overall-number">{this.props.rating}</h1>
                <h1 id = "based-on">Based on 23 Reviews</h1>
                <img src = {this.props.rating>3?Smiling:Straight} id = "review-emoji" style = {{width :"80px"}}></img>
                
            </div>
        )
    }
}

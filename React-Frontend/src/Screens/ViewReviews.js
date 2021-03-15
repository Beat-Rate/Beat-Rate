import React from 'react'
import OverallReview from '../Components/OverallReview'
import "../Css/review.css"
import ReviewListComp from '../Components/ReviewListComp'
// map reviews to reviewlistcomp
export default class ViewReviews extends React.Component {
    render() {
        return (
            <>
            <OverallReview rating = {(4).toFixed(1)}/>
            <div className = "review-list-container">
            <ReviewListComp num = {5}/>
                
            </div>
            </>
        )
    }
}

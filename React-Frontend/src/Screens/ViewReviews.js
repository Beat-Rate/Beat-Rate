import React from 'react'
import OverallReview from '../Components/OverallReview'
import "../Css/review.css"
import ReviewListComp from '../Components/ReviewListComp'
// map reviews to reviewlistcomp
export default class ViewReviews extends React.Component {
    render() {
        return (
            <>
            <center>
            <OverallReview rating = {(4).toFixed(1)}/>
            <div className = "review-list-container">
            <ReviewListComp num = {5}/>
            <ReviewListComp num = {4}/>
            <ReviewListComp num = {3}/>
            <ReviewListComp num = {2}/>
            <ReviewListComp num = {1}/>
            

                
            </div>
            </center>
            </>
        )
    }
}

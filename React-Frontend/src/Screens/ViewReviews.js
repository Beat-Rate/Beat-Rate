import React from 'react'
import OverallReview from '../Components/OverallReview'
import "../Css/review.css";
import '../Css/ConfirmDeletion.css';
import ReviewListComp from '../Components/ReviewListComp'
import ReviewReportPopup from '../Components/ReviewReportPopup'
import ConfirmDeletionPopup from '../Components/ConfirmDeletionPopup'
// map reviews to reviewlistcomp
export default class ViewReviews extends React.Component {

    constructor(){
        super();
        this.state = {
            report_showing :true, //true for testing
            confirm_showing :true //true for testing
        };
        this.setState = this.setState.bind(this);
    }
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
                <ReviewReportPopup state = {this.state.report_showing}  setparentstate = {this.setState}/>
                <ConfirmDeletionPopup 
                        state = {this.state.confirm_showing} 
                        type = "review"
                        setparentstate = {this.setState}
                        />
                
            </center>
            </>
        )
    }
}

import React from 'react'
import trollicon from '../Components/Images/trollicon.png';
import hateicon from '../Components/Images/hateicon.png';
import inappropriateicon from '../Components/Images/inappropriateicon.png';
import lowqualityicon from '../Components/Images/lowqualityicon.png';
import ReviewReportButton from './ReviewReportButton';
//css
import "../Css/ReportReview.css";
export default class ReviewReportPopup extends React.Component {
    render() {

        return (
            <div id = "report-review-popup">
                <button id = "close-popup">X</button>
                <h1>Report Review!</h1>
                <div id = "report-row-1">
                    <ReviewReportButton img = {trollicon} label = "trolling"/>
                    <ReviewReportButton img = {hateicon} label = "hate speech"/>

                </div>
                <div id = "report-row-2">
                    <ReviewReportButton img = {inappropriateicon} label = "inappropriate"/>
                    <ReviewReportButton img = {lowqualityicon}  label = "low quality"/>
                </div>
            </div>
        )
    }
}

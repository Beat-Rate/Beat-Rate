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
            <div id = "report-review-popup" style = {{display : (this.props.state? "block" :"none")}}>
                <button id = "close-popup" 
                onClick = {
                    ()=>{
                        this.props.setparentstate({report_showing:false})
                    }
                }
                >X
                </button>
                <h1 id = "report-header">Report Review!</h1>
                    <div id = "buttons-wrapper">
                    <ReviewReportButton id = "troll" img = {trollicon} label = "trolling"/>
                    <ReviewReportButton  id= "hate"img = {hateicon} label = "hate speech"/>
                    <ReviewReportButton  id = "ina"img = {inappropriateicon} label = "inappropriate"/>
                    <ReviewReportButton  id = "lq"img = {lowqualityicon}  label = "low quality"/>
                    </div>
              
            </div>
        )
    }
}

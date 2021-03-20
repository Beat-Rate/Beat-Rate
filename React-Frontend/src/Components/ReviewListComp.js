import React from 'react';
import No from '../Components/Images/NoStars.png';
import One from '../Components/Images/OneStar.png';
import Two from '../Components/Images/TwoStars.png';
import Three from '../Components/Images/ThreeStars.png';
import Four from '../Components/Images/FourStars.png';
import Five from '../Components/Images/FiveStars.png';
import deleteicon from  '../Components/Images/deleteicon.png';
import flagicon from  '../Components/Images/flagicon.png';
export default class ReviewListComp extends React.Component {

    routeImage(){
        let rating_num = this.props.num
        if(rating_num == 0){
            return No
        }
        else if(rating_num == 1){
            return One
        }
        else if(rating_num == 2){
            return Two
        }
        else if(rating_num == 3){
            return Three
        }
        else if(rating_num == 4){
            return Four
        }
        else{
            return Five
        }
    }
    render() {
        return (
            <div className = "review-comp">
                <h1>Title of review</h1>
                <img className = "rating-image" width = "250px" src = {this.routeImage()}></img>
                <p>Wonderful song , but this song needs
                    some revising with the middle portion of the 
                    song. Most notably at.....
                </p>
                <h3>3/7/2021</h3>
                <img className = "actionimgs" src = {flagicon}></img>
                <img className = "actionimgs" src  = {deleteicon}></img>
                

            </div>
        )
    }
}

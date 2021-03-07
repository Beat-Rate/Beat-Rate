import React from 'react'

export default class ReviewListComp extends React.Component {
    render() {
        return (
            <div className = "review-comp">
                <h1>Title of review</h1>
                <p>Wonderful song , but this song needs
                    some revising with the middle portion of the 
                    song. Most notably at.....
                </p>
                <h3>Date : 3/7/2021</h3>
                <hr className = "list-separator2"></hr>

            </div>
        )
    }
}

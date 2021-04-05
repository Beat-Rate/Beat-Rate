import React, { Component } from 'react'
// for testing proof of concept
export default class PlaceOnGlobal extends Component {
    render() {
        return (
            <div id = "place-on-global">
                <h1>Are you sure you would like to gain reviews?</h1>
                <button>Yes</button>
                <button>No</button>
            </div>
        )
    }
}

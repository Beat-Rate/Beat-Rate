import React  from 'react'

export default class RenameSongBox extends React.Component {
    render() {
        return (
            <div>
                <h1>Rename Song</h1>
                <input placeholder = {"Previous:" + this.props.previous}></input>
                <button>Rename</button>
                <button>Cancel</button>
                
            </div>
        )
    }
}

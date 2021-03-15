import React from 'react'

export default class SignUpHeader extends React.Component {

    toSignIn(){
        window.location.href="/signin"
    }


    render() {
        return (
            <div id = "Header">
                <button onClick = {this.toSignIn}>Login</button>
                <h1>Beat Rate</h1>
                <p id = "summary">
                Get unfiltered , honest reviews in 
                a few clicks. Release your latest music
                with confidence.
                </p>

                <h3>
                Get 30 free credits when you sign up!

                </h3>

                <p id = "terms">
                    By creating an account, you confirm that
                    you've read and accept our <a>terms of use  </a> 
                         and   <a>privacy policy</a>.

                </p>
                
            </div>
        )
    }
}

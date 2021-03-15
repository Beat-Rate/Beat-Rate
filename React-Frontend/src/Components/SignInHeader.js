import React from 'react'

export default class SignInHeader extends React.Component {
    render() {
        return (
            <div id = "Header">
                <button onClick = {this.toSignIn}>Sign Up</button>
                <h1>Beat Rate</h1>
        

                <h3>
                Welcome Back , Login!

                </h3>

                
                
            </div>
        )
    }
}

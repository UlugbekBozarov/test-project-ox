import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div id="sign_up">
            <div className="sign_up_block">
                <h1>Sign in</h1>
                <p>Create an account to enjoy all the services without any ads for free!</p>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Password" />
                </div>
                <div className="btn_block">
                    <button className="btn btn-success">Create Account</button>
                </div>
                <p className="sign_in_up">Do you have an account? <Link to="/sign-in">Sign-in</Link></p>
            </div>
        </div>
    )
}

export default SignUp

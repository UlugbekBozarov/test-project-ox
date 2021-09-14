import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAftarizated } from '../../actions/AftarizatedActions'
import { Link } from 'react-router-dom'
import './signIn.scss'
import axios from 'axios'
import Spinner from '../spinner/Spinner'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SignIn = () => {
    const dispatch = useDispatch();

    const username = useRef()
    const password = useRef()
    const subdomain = useRef()

    const [isLoading, setIsLoading] = useState(false);
    const [wasValidated, setWasValidated] = useState(false)

    const signInFunction = () => {
        if (username.current.value.length > 0 && password.current.value.length > 0 && subdomain.current.value.length > 0) {
            setIsLoading(true)
            axios.post(
                "https://" + subdomain.current.value + ".ox-sys.com/security/auth_check",
                "_username=" + username.current.value + "&_password=" + password.current.value + "&_subdomain=" + subdomain.current.value,
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            ).then(response => {
                setIsLoading(false)
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.token)
                    dispatch(updateAftarizated(response.data.token));
                }
            }).catch(err => {
                setIsLoading(false)
                errorAlert(err.response.data.message)
                dispatch(updateAftarizated(null));
            })
        } else {
            setWasValidated(true);
        }
    }

    const errorAlert = (message) => {
        toast.error(message,
            { position: toast.POSITION.TOP_RIGHT })
    }

    return (
        <div id="sign_in">
            <div className="sign_in_block">
                <h1>Sign in</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni perspiciatis!</p>
                <div className={wasValidated ? "form-group was-validated" : "form-group"}>
                    <input type="text" className="form-control" ref={username} placeholder="Username" required />
                </div>
                <div className={wasValidated ? "form-group was-validated" : "form-group"}>
                    <input type="password" className="form-control" ref={password} placeholder="Password" required />
                </div>
                <div className={wasValidated ? "form-group was-validated" : "form-group"}>
                    <input type="text" className="form-control" ref={subdomain} placeholder="Subdomain" required />
                </div>
                <div className="btn_block d-flex justify-content-center">
                    <button className="btn btn-success d-flex justify-content-center align-items-center" onClick={signInFunction}>
                        {
                            isLoading ? (
                                <Spinner />
                            ) : null
                        }
                        Sign in
                    </button>
                </div>
                <p className="sign_in_up">Alredy Have An Account? <Link to="/sign-up">Sign-up</Link></p>
            </div>
        </div>
    )
}

export default SignIn

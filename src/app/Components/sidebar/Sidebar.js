import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateAftarizated } from '../../actions/AftarizatedActions'
import './sidebar.scss'

const Sidebar = () => {
    const dispatch = useDispatch()
    const toglerLeftbar = () => {
        document.getElementsByClassName("left_sidebar")[0].classList.toggle("open")
    }
    const logOut = () => {
        localStorage.removeItem("token");
        dispatch(updateAftarizated(null));
    }
    return (
        <div id="sidebar">
            <div className="container">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <h5 className="text-white font-weight-bold">OX</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link onClick={logOut} to="/sign-in" className="text-white mr-3" style={{ textDecoration: "none" }}>Log out</Link>
                        <button className="btn d-block d-lg-none" onClick={toglerLeftbar}>
                            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="2" rx="1" fill="white" />
                                <rect y="5" width="20" height="2" rx="1" fill="white" />
                                <rect y="10" width="20" height="2" rx="1" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

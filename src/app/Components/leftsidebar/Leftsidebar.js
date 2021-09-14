import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './leftsidebar.scss'

const Leftsidebar = () => {
    let location = useLocation();
    return (
        <div id="left_sidebar">
            <h1>Pages</h1>
            <ul>
                {
                    [...new Array(5)].map((arr, i) => {
                        return (
                            <li key={i}>
                                <Link to={"/home/" + (i + 1)} className={parseInt(location.pathname.substr(6)) === (i + 1) ? "active" : null}>
                                    Page {i + 1}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Leftsidebar

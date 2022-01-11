import React from 'react'
import "./MainPage.css"
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
export const MainPage = ({ Login }) => {
    return (
        <div>
            {
                Login ? <><Link to="/login"><button>hello i am btn</button></Link></> : <Navigate replace to="/login"></Navigate>
            }
        </div>
    )
}

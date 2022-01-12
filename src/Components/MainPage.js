import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import { Link, useNavigate } from 'react-router-dom'
import firebase from 'firebase'
import { logout } from '../Auth'
import { Avatar } from '@mui/material'
export const MainPage = () => {
    const navigate = useNavigate();
    const [userdata, setuserData] = useState([])
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user)
                navigate('/login')
            else {
                setuserData(user)
                console.log(user.photoURL)
            }
        });
    }, [])
    return (
        <div>
            <Avatar src={userdata.photoURL}></Avatar>
            <><button onClick={() => logout()}>LOGOUT</button></>
        </div>
    )
}

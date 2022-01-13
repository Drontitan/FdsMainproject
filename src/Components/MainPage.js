import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import "./Login.css"
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
                // console.log(user.photoURL)
            }
        });
    }, [])
    return (
        <div>
            <Avatar src={userdata.photoURL}></Avatar>
            <h4>{userdata.displayName}</h4>
            <><button ></button></>
            <button class="button-64" role="button"  ><span onClick={() => logout()} class="text">LOGOUT</span></button>
        </div>
    )
}

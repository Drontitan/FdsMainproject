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
                console.log(user)
            }
        });
    }, [])


    return (
        <>
            <div className="navbar">
                <div className="components">
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/calender"><span>Calender</span></Link>
                    <Link to="/schedule"><span>Schedule</span></Link>
                </div>
                <div class="user">
                    <div className="button-nav">
                        <button onClick={() => logout()} class="text">LOGOUT</button >
                    </div>
                    {/* <p class="post"> {userdata.email} </p> */}
                    <div className='avatar-nav'>
                        <Avatar src={userdata.photoURL} size={40} sx={{ width: 56, height: 56 }} ></Avatar>
                    </div>
                    <h3 class="name" > {userdata.displayName}</h3>
                </div>
            </div>
            IDK NEXT
        </>


    )
}

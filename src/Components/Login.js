import React from 'react'
import { useState } from 'react';
import BG from '../Images/BG.jpg'
import "./Login.css"
import { _login, logout, signup, login_google } from '../Auth';
import { useNavigate } from 'react-router-dom';
export const Login = ({ AuthLogin, AuthsetLogin }) => {

    const [login, setlogin] = useState(false);

    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const [emailL, setemailL] = useState("");
    const [passL, setpassL] = useState("");

    const navigate = useNavigate();

    return (
        <div className='centered'>
            <div className='bg-image'>
                <img src={BG} alt="" loading='lazy' />
            </div>
            <div class="wrapper">
                <h1>Welcome User</h1>
                <div class="form">
                    {
                               
            <button onClick={() => login_google().then(() => { AuthsetLogin(true); navigate('/'); })} class="btn">Google</button>
                                   
                           
                    }
                </div >
            </div >
        </div >
    )
}

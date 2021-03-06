import React from 'react'
import BG from '../Images/BG.jpg'
import "./Login.css"
import { login_google } from '../Auth';
import { useNavigate } from 'react-router-dom';
export const Login = ({ AuthsetLogin }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-image" >
                <img src={BG} alt=""></img>
            </div >
            <div className='centered'>
                <button class="button-64" ><span onClick={() => login_google().then(() => { AuthsetLogin(true); navigate('/'); })} class="text">Google</span></button>
            </div >
        </>
    )
}   

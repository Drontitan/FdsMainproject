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
                        login ? <>
                            <div class="signup">
                                <div class="form-group">
                                    <input type="text" placeholder="full name" required="" />
                                </div>
                                <div class="form-group">
                                    <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" required="" />
                                </div>
                                <div class="form-group">
                                    <input onChange={(e) => setpass(e.target.value)} type="password" placeholder="password" required="" />
                                </div>
                                <button onClick={() => console.log(signup(email, pass))} type="submit" class="btn">SIGN UP</button>
                                <div >
                                    Already have an account? <div className="togglelogin" id="login" onClick={() => setlogin(false)} >Login</div>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div class="signin">
                                    <div class="form-group">
                                        <input onChange={(e) => setemailL(e.target.value)} type="email" placeholder="Email" required="" />
                                    </div>
                                    <div class="form-group">
                                        <input onChange={(e) => setpassL(e.target.value)} type="password" placeholder="password" required="" />
                                    </div>
                                    {/* <div class="form-group">
                                        <input type="password" placeholder="Confirm password" required="" />
                                    </div> */}
                                    {/* <div class="" forget-password>
                                        <div class="check-box">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox">Remember me</label>
                                        </div>
                                        Forget Password?
                                    </div> */}
                                    <button onClick={() => console.log(_login(emailL, passL))} type="submit" class="btn">LOGIN</button>
                                    <button onClick={() => login_google().then(() => { AuthsetLogin(true); navigate('/'); })} class="btn">Google</button>
                                    <div>
                                        Create New a account? <div className="togglelogin" id="signup" onClick={() => setlogin(true)} >Signup</div>
                                    </div>
                                </div>
                            </>
                    }
                </div >
            </div >
        </div >
    )
}

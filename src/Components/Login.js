import React from 'react'
import { useState } from 'react';
import BG from '../Images/BG.jpg'
import "./Login.css"
export const Login = () => {

    const [login, setlogin] = useState(true);

    return (
        <div className='centered'>
            <div className='bg-image'>
                <img src={BG} alt="" loading='lazy' />
            </div>
            <div class="wrapper">
                <h1>Welcome User</h1>
                <form action="#" class="form" method="post" autocomplete="on">
                    {
                        login ? <>
                            <div class="signup">
                                <div class="form-group">
                                    <input type="text" placeholder="full name" required="" />
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Email" required="" />
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="password" required="" />
                                </div>
                                <button type="submit" class="btn">SIGN UP</button>
                                <div >
                                    Already have an account? <div className="togglelogin" id="login" onClick={() => setlogin(false)} >Login</div>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div class="signin">
                                    <div class="form-group">
                                        <input type="email" placeholder="Email" required="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" placeholder="password" required="" />
                                    </div>
                                    {/* <div class="" forget-password>
                                        <div class="check-box">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox">Remember me</label>
                                        </div>
                                        Forget Password?
                                    </div> */}
                                    <button type="submit" class="btn">LOGIN</button>
                                    <div>
                                        Create New a account? <div className="togglelogin" id="signup" onClick={() => setlogin(true)} >Signup</div>
                                    </div>
                                </div>
                            </>
                    }
                </form >
            </div >
        </div>
    )
}

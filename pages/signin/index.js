
import classes from './Signup.module.css'

import React, { useState } from 'react';
import  Loginrighttemp  from './loginrighttamp';
import  Signuprighttemp  from './signuprighttemp';
import Link from 'next/link';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Signup = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className={classes.signinup}>

            <div className={classes.limiter}>

                <div className={classes.leftpaper} >
                    <div>

                        <div >{!isSignup ? <div>
                            <h1>welcome back</h1>
                            <h1 style={{ display: "flex" }}>To <p style={{ marginLeft: "10px", color: "blue" }}>UserWise</p></h1>

                        </div> : <div><h1>Create your Account</h1> </div>}</div>

                        <div className={classes.heading_desc}>{isSignup ? null : 'Sign in  To your account below'}</div>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <div container spacing={2}>
                                {isSignup && (
                                    <>

                                        <div className={classes.wrapinput100} >
                                            <input placeholder="Full Name" name="full Name" label="First Name" handleChange={handleChange} autoFocus half />
                                        </div>
                                        {/* <div className={classes.wrapinput100} >
                                        <input name="lastName" label="Last Name" handleChange={handleChange} half />
                                    </div> */}
                                    </>
                                )}
                                <div className={classes.wrapinput100} >
                                    <input name="email" placeholder='Email' label="Email Address" handleChange={handleChange} type="email" />
                                </div>
                                <div className={classes.wrapinput100} >
                                    <input name="password" placeholder='password' label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                                </div>

                                {isSignup && <div className={classes.wrapinput100} >
                                    <input placeholder="confirm Password" name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                                </div>
                                }

                            </div>
                            <div>
                                <div>
                                    {isSignup ? null : ' Forgot Password?'}

                                </div>
                            </div>
                            <div className={classes.privicy}>{isSignup ? 'by Clicking "register" you Agree yo UserWise Terms and Privicy .' : null}</div>
                            <Link href="/home">

                                <button type="submit" className={classes.submit}>
                                    {isSignup ? 'Sign Up' : 'Sign In'}
                                </button>
                            </Link>


                            <div className={classes.switchbutton}>
                                <div onClick={switchMode} style={{color:"blue",borderBottom:"2px solid blue"}}>
                                    {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                                </div>
                            </div>

                        </form>

                    </div>


                </div>
                <div className={classes.rightpaper}>
                    {(isSignup) ? <div className={classes.rightpapersignin}><Signuprighttemp />  </div> : <Loginrighttemp />}


                </div>

            </div>

        </div>
    );
};

export default Signup;







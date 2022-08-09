
import classes from '../../styles/Signup.module.css'

import React, { useState } from 'react';
import Loginrighttemp from './loginrighttamp';
import Signuprighttemp from './signuprighttemp';
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
        <div className={classes.signinup} >
            {(isSignup) ?
                <div className={classes.rightpaper}>
                    <Loginrighttemp />
                </div>
                : null}


            <div className={classes.leftpaper} >
                <div>
                    <div  className='text-5xl font-medium' >{!isSignup ? <div>
                        <h1 className='leading-2'>welcome back</h1>
                        <h1 style={{ display: "flex" }}>To <p style={{ marginLeft: "10px", color: "blue" }}>UserWise</p></h1>
                    </div> : <div><h1>Create your </h1> <h1>Account</h1></div>}</div>
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

                            <button type="submit" className={`${classes.submit} ${classes.subbmithover}`}>
                                {isSignup ? 'Register' : 'Sign In'}
                            </button>
                        </Link>


                        <div className={classes.switchbutton}>
                            <span>
                                {isSignup ? 'Already have an account ?  ' : "Don 't have an account ?  "}
                            </span>
                            <span onClick={switchMode} style={{ color: "blue", borderBottom: "2px solid blue" }}>
                                {isSignup ? 'Sign in' : " Sign Up"}
                            </span>
                        </div>

                    </form>

                </div>


            </div>
            {(isSignup) ? null :
                <div className={classes.rightpaper}>
                    <Loginrighttemp />
                </div>
            }




        </div>
    );
};

export default Signup;







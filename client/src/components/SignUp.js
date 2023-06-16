import React from 'react';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Navbar from './Navbar'

function SignUp() {

    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: ''
    });

    const [ addUser, {error, data} ] = useMutation(ADD_USER);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log(userInfo);
        setUserInfo({...userInfo, [name]: value});
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addUser({
                variables: {
                    ...userInfo
                }
            })
            window.location.reload();
            Auth.login(data.addUser.token)
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <form className="login-signup-form row mx-auto col-10 col-md-8 col-lg-6" onSubmit={handleFormSubmit}>
                <h1 className="formHeader">
                    Sign up for your next adventure!
                </h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="username"
                    value={userInfo.username}
                    onChange={handleInputChange}
                    required />
                        <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password"
                    value={userInfo.password}
                    onChange={handleInputChange}
                    required />
                </div>
                <div>
                    Already have an account? {`\n`}
                    <Link to={`/login`}>
                        Login here!
                    </Link>
                </div>
                <div className='d-flex justify-content-center'>
                    <button id="submit-login-signup" type="submit" className="btn btn-primary mb-5">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
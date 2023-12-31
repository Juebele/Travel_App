import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import Home from './Home';
import Navbar from './Navbar'
import YourTripDashboard from './LoggedIn/YourTripDashboard';


function Login() {

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;

        setFormState({ ...formState, [name]: value });

    };

    const loginFormHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState }
            })
            Auth.login(data.login.token);
            // console.log(data);


        } catch (error) {
            console.log(error)
        }
        setFormState({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <Navbar />
            {!Auth.loggedIn() ? (
                <div className="login-signup-form-container">
                    <form onSubmit={loginFormHandler} className="card login-signup-form mx-auto col-10 col-md-8 col-lg-6 shadow">
                        <h1 className="formHeader">
                            Welcome to Bon Voyage!
                        </h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                name="username"
                                value={formState.username}
                                onChange={handleInputChange}
                                required />
                            <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                name="password"
                                value={formState.password}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            Don't have an account? {`\n`}
                            <Link to={`/sign-up`}>
                                Sign up instead!
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center mb-5'>
                            <button id="submit-login-signup" type="submit" className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                </div>
            ) : (
                <YourTripDashboard />
            )}
        </div>
    )
}

export default Login;
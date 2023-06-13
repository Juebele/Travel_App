import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {

    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        console.log(userInfo);
        setUserInfo({...userInfo, [name]: value});
    };

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const { data } = await addUser({
    //             variables: {
    //                 ...userInfo
    //             }
    //         })
    //         window.location.reload();
    //         console.log(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div>
            <form className="login-signup-form row mx-auto col-10 col-md-8 col-lg-6">
                <h1 className="formHeader">
                    Welcome back!
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
                        Don't have an account? {`\n`}
                        <Link to={`/sign-up`}>
                            Sign up instead!
                        </Link>
                    </div>
                <button id="submit-login-signup" type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;
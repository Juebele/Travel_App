import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

function SignUp() {

    const [ userInfo, setUserInfo ] = useState({
        username: '',
        password: ''
    });

    const [ addUser, {error} ] = useMutation(ADD_USER);

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
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
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
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;
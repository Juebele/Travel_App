import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            This is the login page
            <div>
                Don't have an account? {`\n`}
                <Link to={`/sign-up`}>
                    Sign up instead!
                </Link>
            </div>
        </div>
    )
}

export default Login;
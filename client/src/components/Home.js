import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            This is the login page
            <Link to={`/login`}>
                <button className="btn btn-primary">
                    Login
                </button>
            </Link>
        </div>
    )
}

export default Home;
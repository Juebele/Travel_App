import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <p>
                Do you love to travel, but get overwhelmed by all the planning? 
            </p>
            <h1>
                Welcome to (insert official name here). Trip planning made easy.
            </h1>
            <button className="btn btn-primary">
                <Link id="getStarted" className="customLink" to={`/login`}>
                    Get Started
                </Link>
            </button>
            <button className="btn btn-primary">
                <Link className="customLink" to={`/yourtrip`}>
                    Your trip
                </Link>
            </button>

        </div>
    )
}

export default Home;

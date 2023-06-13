import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="homepage container-fluid">
            <p className='d-flex justify-content-center'>
                Do you love to travel, but get overwhelmed by all the planning?
            </p>
            <h2 className='d-flex justify-content-center'>
                Welcome to (insert official name here). Trip planning made easy.

            </h2>
            <div className="d-flex justify-content-center">
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
        </div>
    )
}

export default Home;

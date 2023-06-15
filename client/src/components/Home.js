import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';

const Home = () => {
  return (
    <div id="homepage">
      <Navbar />
      <div id="homepage-bg">
        <div id="another-home-el" className="container-fluid">
          <div className="homepage-el col-6">
            <h1>
              Welcome to Bon Voyage! Trip planning made easy.
            </h1>
            <button id="getStartedBtn" className="btn btn-primary">
              <Link id="getStartedLink" className="customLink" to={`/sign-up`}>
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
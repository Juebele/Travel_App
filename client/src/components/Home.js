import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';
import Auth from '../utils/auth';
import CreateTripForm from './LoggedIn/YourTripDetails/CreateTripForm';

const Home = () => {
  return (
    <div>
      {!Auth.loggedIn() ? (
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
      ) : (
        <div>
          <Navbar />
          <div>Your Trips</div>
            <div className="row">
              <div className="card text-center mb-3 col-3">
                  <div className="card-body">
                    <h5 className="card-title">Trip Titles</h5>
                    <button href="#" class="btn btn-primary">Go somewhere</button>
                  </div>
                </div>
                <div className="card text-center mb-3 col-3">
                  <div className="card-body">
                    <h5 className="card-title">Trip Titles</h5>
                    <button href="#" class="btn btn-primary">Go somewhere</button>
                  </div>
                </div>
                <div className="card text-center mb-3 col-3">
                  <div className="card-body">
                    <h5 className="card-title">Trip Titles</h5>
                    <button href="#" class="btn btn-primary">Go somewhere</button>
                  </div>
                </div>
            </div>
                <CreateTripForm />
          </div>
      )}

    </div>
  )
}

export default Home;
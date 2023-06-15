import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';
import Auth from '../utils/auth';
import CreateTripForm from './LoggedIn/YourTripDetails/CreateTripForm';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_ME);
  console.log(data);

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
          {data ? data.me.trips.map((trip) => {
            return (
              <div className="card text-center mb-3 col-3">
                <div className="card-body">
                  <h5 className="card-title">{trip.tripName}</h5>
                  <button className="btn btn-primary">
                    <Link to={`/trips/${trip._id}`}>
                      View Trip
                    </Link>
                  </button>
                </div>
              </div>
            )
          }) : null }
            <CreateTripForm />
          </div>
      )}

    </div>
  )
}

export default Home;
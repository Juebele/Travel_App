import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';
import Auth from '../utils/auth';
import CreateTripForm from './LoggedIn/YourTripDetails/CreateTripForm';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

const Home = () => {
  const textColor= '#950952';

  const { loading, data } = useQuery(QUERY_ME);
  console.log(data);

  return (
    <div>
      {!Auth.loggedIn() ? (
        <div id="homepage">
          <Navbar />
          <div id="homepage-bg">
            <div id="another-home-el" className="container-fluid ">
              <div className="homepage-el">
                <h1 style={{color: textColor}} className=''>
                  Welcome to Bon Voyage! 
                </h1>
                <div style={{marginBottom: '50px'}}>
                  <h2 style={{color: textColor, fontSize: '50px', fontWeight: 'bold', }} className=''>
                    Trip planning made easy.
                  </h2>
                </div>
                <button id="getStartedBtn" className="btn btn-primary" style={{ backgroundColor: textColor, border: 'none' }}>
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
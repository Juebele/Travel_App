import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar';
import Auth from '../utils/auth';
import CreateTripForm from './LoggedIn/YourTripDetails/CreateTripForm';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import trashcan from '../../src/Assets/imgs/trashcan.png';
import { DELETE_TRIP } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const Home = () => {
  const textColor = 'whitesmoke';

  const { loading, data } = useQuery(QUERY_ME);
  console.log(data);

  const [ deleteTrip, {error} ] = useMutation(DELETE_TRIP);

  return (
    <div>
      {!Auth.loggedIn() ? (
        <div id="homepage">
          <Navbar />
          <div id="homepage-bg">
            <div id="another-home-el" className="container-fluid ">
              <div className="homepage-el">
                <h1 className='home-text'>
                  Welcome to Bon Voyage!
                </h1>
                <div style={{ marginBottom: '50px' }}>
                  <h2 className='home-text'>
                    Trip planning made easy.
                  </h2>
                </div>
                <button id="getStartedBtn" className="home-start-btn">
                  <Link id="getStartedLink" className="customLink" to={`/sign-up`} style={{ fontSize: "50px", fontWeight: "bold" }}>
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
          <h2 className="d-flex justify-content-center my-4 fw-bold">Your Trips</h2>
          <div id="tripContainers" className='d-flex justify-content-center'>
            {data ? data.me.trips.map((trip) => {
              return (
                <div className="card border-primary text-center mb-3 col-3 mx-1">
                  <div className="card-body shadow">
                    <h5 className="card-title">{trip.tripName}</h5>
                    <button className="btn btn-primary">
                      <Link to={`/trips/${trip._id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        View Trip
                      </Link>
                    </button>
                    <br/>
                    <button onClick={() => {
                      if(window.confirm('Are you sure you want to delete this trip?')) {
                        deleteTrip({
                          variables: {id: trip._id}
                        })
                        window.location.reload()
                      } else {
                        window.location.reload()
                      }
                      }}
                      className='mt-2 justify-content-end' style={{ border: 'none', background: 'white' }}>
                      <img 
                        className='border border-danger rounded'
                        src={trashcan} 
                        style={{ height: '20px', width: '20px' }} 
                        onMouseEnter={(e) => {
                          e.target.style.background = 'pink';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'white';
                        }}
                      />
                    </button>  
                  </div>
                </div>
              )
            }) : null}
          </div>
          <h2 className="d-flex justify-content-center my-4 fw-bold">Create a new trip</h2>
          <CreateTripForm />
        </div>
      )}

    </div>
  )
}

export default Home;

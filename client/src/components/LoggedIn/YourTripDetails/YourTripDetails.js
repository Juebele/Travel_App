import React, { useState, useEffect } from 'react';
import Overview from './Overview';
import CreateTripForm from './CreateTripForm';
import Dates from './Dates';
import Lodging from './Lodging';
import Destinations from './Destinations';
import { useParams } from 'react-router-dom';

export default function YourTripDetails({trips})  {
  const [activeTab, setActiveTab] = useState(0);
  const { tripid } = useParams();
  const handleTabClick = (index) => {
    setActiveTab(index);
  }

 const [currentTripId, setCurrentTripId] = useState('');

//  const trackCurrentTripId = (e) => {
//     const presentTripId = e.target.id;
//     setCurrentTripId(presentTripId);
//     console.log(currentTripId);
//  }

//   useEffect(() => {
//     console.log('hi')
//   }, [activeTab])



  return (
    <div>
        {/* <div className='container' onClick={trackCurrentTripId}>
        {trips.map((trip) => (
           <button key={trip._id} id={trip._id}>{trip._id}</button>  
        ))}
        </div > */}
        <h2 className="d-flex justify-content-center my-4 fw-bold">
            Your Trip
        </h2>
        <div className="d-flex justify-content-center">
            Trip planner: Insert username here
        </div>
        <div className="d-flex justify-content-center my-3">
            <button className="btn btn-primary">
                Invite +
            </button>
        </div>
        <div className="d-flex justify-content-center mb-4">
            <button onClick={() => handleTabClick(0)} className={`btn ${activeTab === 0 ? 'btn-primary' : 'btn-dark'} fw-bold fs-5 mt-2 mx-1 shadow`}>
                Overview
            </button>
            <button onClick={() => handleTabClick(1)} className={`btn ${activeTab === 1 ? 'btn-primary' : 'btn-dark'} fw-bold fs-5 mt-2 mx-1 shadow`}>
                Dates
            </button>
            <button onClick={() => handleTabClick(2)} className={`btn ${activeTab === 2 ? 'btn-primary' : 'btn-dark'} fw-bold fs-5 mt-2 mx-1 shadow`}>
                Destinations
            </button>
            <button onClick={() => handleTabClick(3)} className={`btn ${activeTab === 3 ? 'btn-primary' : 'btn-dark'} fw-bold fs-5 mt-2 mx-1 shadow`}>
                Lodging
            </button>
            <button onClick={() => handleTabClick(4)} className={`btn ${activeTab === 4 ? 'btn-primary' : 'btn-dark'} fw-bold fs-5 mt-2 mx-1 shadow`}>
                Itinerary
            </button>
        </div>
        <div>
            {activeTab === 0 && <Overview id={tripid}/>}
            {activeTab === 1 && <Dates id={tripid} />}
            {activeTab === 2 && <Destinations id={tripid} />}
            {activeTab === 3 && <Lodging id={tripid} />}
            {activeTab === 4 && <div>Insert Itinerary here</div>}
        </div>
    </div>
  )
}

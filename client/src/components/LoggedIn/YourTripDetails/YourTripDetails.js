import React, { useState } from 'react';
import CreateTripForm from './CreateTripForm';
import Dates from './Dates';
import Lodging from './Lodging';
import Destinations from './Destinations';

export default function YourTripDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

  return (
    <div>
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
            <button onClick={() => handleTabClick(0)} className={`btn ${activeTab === 0 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Create Trip
            </button>
            <button onClick={() => handleTabClick(1)} className={`btn ${activeTab === 1 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Overview
            </button>
            <button onClick={() => handleTabClick(2)} className={`btn ${activeTab === 2 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Dates
            </button>
            <button onClick={() => handleTabClick(3)} className={`btn ${activeTab === 3 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Destinations
            </button>
            <button onClick={() => handleTabClick(4)} className={`btn ${activeTab === 4 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Lodging
            </button>
            <button onClick={() => handleTabClick(5)} className={`btn ${activeTab === 5 ? 'btn-primary' : 'btn-light'} fw-bold fs-5 mt-2`}>
                Itinerary
            </button>
        </div>
        <div>
            {activeTab === 0 && <CreateTripForm />}
            {activeTab === 1 && <div>Insert the Overview here</div>}
            {activeTab === 2 && <Dates />}
            {activeTab === 3 && <Destinations />}
            {activeTab === 4 && <Lodging />}
            {activeTab === 5 && <div>Insert Itinerary here</div>}
        </div>
    </div>
  )
}

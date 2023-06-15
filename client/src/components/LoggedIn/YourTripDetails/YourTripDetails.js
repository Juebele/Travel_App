import React, { useState } from 'react';
import CreateTripForm from './CreateTripForm';
import Dates from './Dates';

export default function YourTripDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

  return (
    <div>
        <div>
            Your Trip
        </div>
        <div>
            Trip planner: Insert username here
        </div>
        <div>
            <button className="btn btn-primary">
                Invite
            </button>
        </div>
        <div className="d-flex justify-content-center mb-4">
            <button onClick={() => handleTabClick(0)} className={`btn ${activeTab === 0 ? 'btn-primary' : 'btn-light'}`}>
                Create Trip
            </button>
            <button onClick={() => handleTabClick(1)} className={`btn ${activeTab === 1 ? 'btn-primary' : 'btn-light'}`}>
                Overview
            </button>
            <button onClick={() => handleTabClick(2)} className={`btn ${activeTab === 2 ? 'btn-primary' : 'btn-light'}`}>
                Dates
            </button>
            <button onClick={() => handleTabClick(3)} className={`btn ${activeTab === 3 ? 'btn-primary' : 'btn-light'}`}>
                Destinations
            </button>
            <button onClick={() => handleTabClick(4)} className={`btn ${activeTab === 4 ? 'btn-primary' : 'btn-light'}`}>
                Lodging
            </button>
            <button onClick={() => handleTabClick(5)} className={`btn ${activeTab === 5 ? 'btn-primary' : 'btn-light'}`}>
                Itinerary
            </button>
        </div>
        <div>
            {activeTab === 0 && <CreateTripForm />}
            {activeTab === 1 && <div>Insert the Overview here</div>}
            {activeTab === 2 && <Dates />}
            {activeTab === 3 && <div>Insert Destinations here</div>}
            {activeTab === 4 && <div>Insert Lodging here</div>}
            {activeTab === 5 && <div>Insert Itinerary here</div>}
        </div>
    </div>
  )
}

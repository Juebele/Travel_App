import React, { useState } from 'react';
import CreateTripForm from './CreateTripForm';

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
            <button>
                Invite
            </button>
        </div>
        <div>
            <button onClick={() => handleTabClick(0)} className={activeTab === 0 ? 'active' : ''}>
                Create Trip
            </button>
            <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>
                Overview
            </button>
            <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>
                Dates
            </button>
            <button onClick={() => handleTabClick(3)} className={activeTab === 0 ? 'active' : ''}>
                Destinations
            </button>
            <button onClick={() => handleTabClick(4)} className={activeTab === 0 ? 'active' : ''}>
                Lodging
            </button>
            <button onClick={() => handleTabClick(5)} className={activeTab === 0 ? 'active' : ''}>
                Itinerary
            </button>
        </div>
        <div>
            {activeTab === 0 && <CreateTripForm />}
            {activeTab === 1 && <div>Insert the Overview here</div>}
            {activeTab === 2 && <div>Insert Dates here</div>}
            {activeTab === 3 && <div>Insert Destinations here</div>}
            {activeTab === 4 && <div>Insert Lodging here</div>}
            {activeTab === 5 && <div>Insert Itinerary here</div>}
        </div>
    </div>
  )
}

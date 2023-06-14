import React, { useState } from 'react';
import Banner from './Banner'
import YourTripDetails from './YourTripDetails/YourTripDetails';

export default function YourTripHome(props) {
    return (
        <div> 
            <Banner />
            <YourTripDetails />
            {/* Insert Participants component here (if we have time) */}
        </div>
    )
}

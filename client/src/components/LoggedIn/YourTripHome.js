import React, { useState } from 'react';
import Banner from './Banner'
import YourTripDetails from './YourTripDetails/YourTripDetails';
import Navbar from '../Navbar'

export default function YourTripHome(props) {
    return (
        <div> 
            <Navbar />
            <Banner />
            <YourTripDetails />
            {/* Insert Participants component here (if we have time) */}
        </div>
    )
}

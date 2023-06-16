import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Banner from './Banner'
import YourTripDetails from './YourTripDetails/YourTripDetails';
import Navbar from '../Navbar'
import { QUERY_ME, QUERY_USER } from '../../utils/queries';

export default function YourTripDashboard(props) {

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || [];
    //console.log("this is the user:", user);

    const userTrips = user.trips;
    //console.log("my trips:" , userTrips)

    return (
        <div> 
            <Navbar />
            <Banner />
            <YourTripDetails
            trips={userTrips} />
            {/* Insert Participants component here (if we have time) */}
        </div>
    )
}

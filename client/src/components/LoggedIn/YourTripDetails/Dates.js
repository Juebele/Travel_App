import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATES } from '../../../utils/queries';

export default function Dates() {
    const { loading, data } = useQuery(GET_DATES);
    const trips = data?.trips || [];
    // The number in the following array will need to be changed based on which trip the user chooses to see from the home page
    const trip = trips[0];

    const calculateDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end - start);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return days;
      };
    
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : !trips.length ? (
                <div>Dates haven't been set yet</div>
            ) : (
                <div>
                    <p>Start Date: {trip.startDate}</p>
                    <p>End Date: {trip.endDate}</p>
                    <p>Number of Days: {calculateDays(trip.startDate, trip.endDate)}</p>
                </div>
            )}
        </div>
    );
}
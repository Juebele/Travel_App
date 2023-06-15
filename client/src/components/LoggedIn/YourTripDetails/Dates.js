import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATES } from '../../../utils/queries';

export default function Dates() {
    const { loading, data } = useQuery(GET_DATES);
    const trips = data?.trips || [];
    // The number in the following array will need to be changed based on which trip the user chooses to see from the home page
    const trip = trips[0];

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
                </div>
            )}
        </div>
    );
}
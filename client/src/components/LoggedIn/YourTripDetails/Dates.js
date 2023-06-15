import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DATES } from '../../../utils/queries';
import { EDIT_TRIP } from '../../../utils/mutations';

export default function Dates() {
    const { loading, data } = useQuery(GET_DATES);
    const trips = data?.trips || [];
    // The number in the following array will need to be changed based on which trip the user chooses to see from the home page
    const trip = trips[0];

    const [ editTrip, {error} ] = useMutation(EDIT_TRIP);

    const calculateDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end - start);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return days;
      };

    const [startDate, setStartDate] = useState();

    const [endDate, setEndDate] = useState();
    
    console.log(trip);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : !trips.length ? (
                <div>Dates haven't been set yet</div>
            ) : (
                <div className="card mx-auto mb-4" style={{ maxWidth: '400px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Trip Duration</h5>
                        <div className="row">
                        <div className="col-6">
                            <p className="fw-bold mb-1">Start Date:</p>
                            <p>{trip.startDate}</p>
                            <input onChange={(event) => setStartDate(event.target.value)} type="text" defaultValue={startDate}></input>
                            {/* <button>Edit</button> */}
                            <button onClick={() => {
                                editTrip({variables: {
                                    startDate: startDate, 
                                    id: 
                                }})
                            }}>Save</button>
                        </div>
                        <div className="col-6">
                            <p className="fw-bold mb-1">End Date:</p>
                            <p>{trip.endDate}</p>
                            <input onChange={(event) => setEndDate(event.target.value)} type="text" defaultValue={endDate}></input>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <p className="fw-bold mb-1">Number of Days:</p>
                            <p>{calculateDays(startDate, trip.endDate)}</p>
                        </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
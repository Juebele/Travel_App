import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TRIP } from '../../../utils/queries';
import { EDIT_TRIP } from '../../../utils/mutations';
import UpdateTripBtn from '../../UpdateTripBtn';

export default function Dates({id}) {
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: {tripid: id}
    });
    const trip = data?.trip || [];
    console.log(trip);


    //const [ editTrip, {error} ] = useMutation(EDIT_TRIP);
    const calculateDays = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end - start);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return days;
      };

    const [startDate, setStartDate] = useState();

    const [endDate, setEndDate] = useState();

    return (
        <div>
            {loading ? (
                <div className="card mx-auto mb-4 border-primary shadow" style={{ maxWidth: '400px' }}>
                    <div className='card-body'>
                        <div className='d-flex justify-content-center'>Loading...</div>
                    </div>      
                </div>
            ) : (
                <div className="card border-primary shadow mx-auto mb-4" style={{ maxWidth: '400px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">Trip Duration</h5>
                        <div className="row">
                        <div className="col-6">
                            <p className="fw-bold mb-1 d-flex justify-content-center">Start Date:</p>
                            <p className='mb-1 d-flex justify-content-center'>{trip.startDate}</p>
                            <input 
                                className='d-flex justify-content-center text-center' 
                                onChange={(event) => setStartDate(event.target.value)} 
                                type="text" 
                                defaultValue={startDate} 
                                style={{ maxWidth: '170px' }}
                            />
                            {/* <button>Edit</button> */}
                            {/* <button onClick={() => {
                                editTrip({variables: {
                                    startDate: startDate, 
                                    id: window.location.pathname.split('/').pop()
                                }})
                            }}>Save</button> */}
                           
                        </div>
                            <div className="col-6">
                                <p className="fw-bold mb-1 d-flex justify-content-center">End Date:</p>
                                <p className='mb-1 d-flex justify-content-center'>{trip.endDate}</p>
                                <input 
                                    className='text-center' 
                                    onChange={(event) => setEndDate(event.target.value)} 
                                    type="text" 
                                    defaultValue={endDate} 
                                    style={{ maxWidth: '170px' }}
                                />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center mt-3'>
                            <UpdateTripBtn userTrip={data} startDate={startDate} endDate={endDate}/>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col">
                                <p className="fw-bold mb-1 d-flex justify-content-center">Number of Days:</p>
                                <p className='d-flex justify-content-center'>{calculateDays(trip.startDate, trip.endDate)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
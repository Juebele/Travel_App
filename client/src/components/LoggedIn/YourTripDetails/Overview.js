import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRIP } from '../../../utils/queries';

export default function Overview({id}) {
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: {tripid: id}
    })

    const trip = data?.trip || [];
    console.log(trip);

    return (
        <div>
            { loading ? (
                <div className='d-flex justify-content-center mb-3'>Loading...</div>
            ) : (
                <div className="card mx-auto mb-4 border-primary shadow" style={{ maxWidth: '400px' }}>
                    <div className='card-body'>

                        <div className='card mb-3 shadow border-secondary'>
                            <h5 className='card-title text-center mt-3'>Dates</h5>
                            <div  className='row'>
                                <div className='col'>
                                    <p className='text-center'>{trip.startDate} - {trip.endDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className='card mb-3 shadow border-secondary'>
                            <h5 className='card-title text-center mt-3'>Location</h5>
                            <div  className='row'>
                                <div className='col'>
                                    <p className='text-center'>{trip.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className='card shadow border-secondary'>
                            <h5 className='card-title text-center mt-3'>Lodging</h5>
                            <div  className='row'>
                                <div className='col'>
                                    <p className='text-center mb-0'>{trip.lodgingName} at {trip.lodgingAddress}</p>
                                    <p className='text-center'>{trip.lodgingContact}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
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
                <div className="card mx-auto mb-4" style={{ maxWidth: '400px' }}>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>Location</h5>
                        <div  className='row'>
                            <div className='col'>
                                <p className='text-center'>{trip.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
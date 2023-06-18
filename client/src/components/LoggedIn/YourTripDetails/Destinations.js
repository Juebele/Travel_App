import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_TRIP } from '../../../utils/queries';
import { EDIT_TRIP } from '../../../utils/mutations';
import UpdateTripBtn from '../../UpdateTripBtn';
// import { useState } from 'react';
// import CreateTripForm from './CreateTripForm';
// import { Link } from 'react-router-dom';
import { ADD_TRIP } from '../../../utils/mutations';

//Need to import location and description from the database instead of hardcoding them in

export default function Destinations({id}) {
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: {tripid: id}
    });
    const trip = data?.trip || [];
    console.log(trip);

    const [ location, setLocation ] = useState();

    const [ description, setDescription ] = useState();

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="card mx-auto mb-4" style={{ maxWidth: '400px' }}>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>Location</h5>
                        <div  className='row'>
                            <div className='col'>
                                <p className='text-center'>{trip.location}</p>
                                <input onChange={(event) => setLocation(event.target.value)} type='text' defaultValue={location}></input>
                            </div>
                        </div>
                        <div className='text-center'>
                            <UpdateTripBtn userTrip={data} location={location}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}


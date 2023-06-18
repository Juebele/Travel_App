import React, { useState } from 'react';
import { EDIT_TRIP } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const UpdateTripBtn = ({userTrip, startDate, endDate, location, lodgingName, lodgingAddress, lodgingContact, tripName}) => {
    const { trip } = userTrip;
    console.log(trip);
    console.log(startDate);
    const [editTrip] = useMutation(EDIT_TRIP)

    const updateTripHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await editTrip({
                variables: {id: trip._id, ...trip, tripName, startDate, endDate, location, lodgingName, lodgingAddress, lodgingContact }
            })
            // window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <p>
            <button className='btn btn-primary shadow' onClick={updateTripHandler}>
                Update
            </button>
        </p>
   
    )
};

export default UpdateTripBtn;

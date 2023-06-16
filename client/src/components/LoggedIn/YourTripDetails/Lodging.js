import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_TRIP } from '../../../utils/queries';
import UpdateTripBtn from '../../UpdateTripBtn';

export default function Lodging({id}) {
    const { loading, data } = useQuery(QUERY_TRIP, {
        variables: {tripid: id}
    });
    const trip = data?.trip || [];
    console.log(trip);



    const [lodgingName, setLodgingName] = useState();
    const [lodgingAddress, setLodgingAddress] = useState();
    const [lodgingContact, setLodgingContact] = useState();


    //include logic to get lodging by query

    // const { loading, data } = useQuery(QUERY_ME);
    // //CURSED CURSED CURSED CURSED
    // const selectedTrip = window.location.pathname.split('/').pop();
    // console.log(selectedTrip);
    // //console.log(data);
    // console.log(data.me.trips.filter(trip => trip._id === selectedTrip))
    // const trip = data.me.trips.filter(trip => trip._id === selectedTrip)
    // console.log(trip);
    // console.log(trip[0]._id)


    return (
        <div>
            <h2>Address</h2>
            <h2>Cost </h2>
            <p>insert cost</p>
            <input onChange={(event) => setLodgingName(event.target.value)} type="text" defaultValue={lodgingName}></input>
            {/* <UpdateTripBtn userTrip={data} lodgingName={lodgingName} lodgingContact={lodgingContact} lodgingAddress={lodgingAddress} /> */}
            <div id='external-sites'>
                <ul id='hotel-sites'>
                    <button className='btn btn-primary'><li><a href='https://www.expedia.com/Hotels' target='_blank'>find hotels at Expedia</a></li></button>
                    <button className='btn btn-primary'><li><a href='https://www.travelocity.com/' target='_blank'>find hotels at Travelocity</a></li></button>
                </ul>
                <ul>
                    <button className='btn btn-primary'><li><a href='https://www.airbnb.com/' target='_blank'>find stays at AirBNB</a></li></button>
                    <button className='btn btn-primary'><li><a href='https://www.vrbo.com/' target='_blank'>find stays at Vrbo</a></li></button>
                </ul>
            </div>
        </div>
    );
};
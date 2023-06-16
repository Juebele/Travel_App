import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../../utils/queries';

export default function Lodging() {

    //include logic to get lodging by query

    const { loading, data } = useQuery(QUERY_ME);
    
    const selectedTrip = window.location.pathname.split('/').pop();
    console.log(selectedTrip);
    //console.log(data);
    console.log(data.me.trips.filter(trip => trip._id === selectedTrip))
    const trip = data.me.trips.filter(trip => trip._id === selectedTrip)
    console.log(trip);
    console.log(trip[0]._id)


    return (
        <div>
            <h2>Address</h2>
            <p>{trip[0].lodgingAddress}</p>
            <h2>Cost </h2>
            <p>insert cost</p>
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
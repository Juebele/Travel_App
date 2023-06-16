import React from 'react';
import { Link } from 'react-router-dom';

export default function Lodging() {

    //include logic to get lodging by query

    return (
        <div>
            <h2>Address</h2>
            <p>insert address</p>
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
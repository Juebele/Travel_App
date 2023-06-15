import React from 'react';
import { useState } from 'react';
import CreateTripForm from './CreateTripForm';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../../utils/mutations';

//Need to import location and description from the database instead of hardcoding them in

const image = require('../../../Assets/imgs/aspen.jpg')

function Destinations() {
    const location = "Aaaassspennnnnn";
    const description = "Some place warm, where the beer flows like wine!";

    return (
        <div className='container-fluid row'>
            <div className='container-fluid col-sm-4' id='aspen-image'>
                <div className='container-fluid col-sm' id='image-row'>
                    <img src={image} style={{ maxWidth: '100%' }} />
                </div>
            </div>
            <div className='container-fluid col-7' id='destinations-info'>
                <ul>
                    <li>Location: {location}</li>
                    <li>Description: {description}</li>
                </ul>
                <div className='text-center'>
                    {/* <button className='btn btn-auto d-inline-block align-content-center'>Change Destination Details</button> */}
                    <Link to={'/your-trip'}>test</Link>
                </div>
            </div>
        </div>
    )
}

export default Destinations;
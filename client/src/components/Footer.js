import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer container-fluid row'>
            <div className='container-fluid col contributors'>
                <p className='container-fluid row justify-content-start'>Alisa</p>
                <p className='container-fluid row justify-content-start'>Cole</p>
                <p className='container-fluid row justify-content-start'>Dowling</p>
                <p className='container-fluid row justify-content-start'>Bryant</p>
                <p className='container-fluid row justify-content-start'>James</p>
            </div>
            <div className='container-fluid col links'>
                <p className='container-fluid row justify-content-center'>Home</p>
                <p className='container-fluid row justify-content-center'>Sign Up</p>
                <p className='container-fluid row justify-content-center'>Log In</p>
            </div>
            <div className='container-fluid col copyright'>
                <p className='container-fluid row justify-content-end'>Copyright 2023</p>
            </div>
        </div>
    )
}

export default Footer;
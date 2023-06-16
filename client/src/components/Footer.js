import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer row' style={{ display: 'block'}}>
            <div className='container-fluid col contributors'>
                <p className='container-fluid row justify-content-start'>Alisa Bevers</p>
                <p className='container-fluid row justify-content-start'>Cole Thompson</p>
                <p className='container-fluid row justify-content-start'>Dowling Briggs</p>
                <p className='container-fluid row justify-content-start'>Bryant Lee</p>
                <p className='container-fluid row justify-content-start'>James Uebele</p>
            </div>
            {/* <div className='container-fluid col links'>
                <p className='container-fluid row justify-content-center'>Home</p>
                <p className='container-fluid row justify-content-center'>Sign Up</p>
                <p className='container-fluid row justify-content-center'>Log In</p>
            </div> */}
            <div className='container-fluid col copyright'>
                <p className='container-fluid row justify-content-end'>Copyright 2023</p>
            </div>
        </div>
    )
}

export default Footer;

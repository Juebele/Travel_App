import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer container-fluid justify-content-center row'>
            <div className='container-fluid col contributors justify-content-center'>
                <p>Alisa</p>
                <p>Cole</p>
                <p>Dowling</p>
                <p>Bryant</p>
                <p>James</p>
            </div>
            <div className='container-fluid col links'>Site Links</div>
            <div className='container-fluid col copyright'>Copyright 2023</div>
        </div>
    )
}

export default Footer;
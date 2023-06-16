import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer row'>
            <p className='container-fluid row justify-content-end'>© 2023, GT Bootcamp</p>
            <p>Made with ❤️ by Group 1</p>
            <div id="contributorLinks" className='container-fluid col contributors'>
                <p><a href='https://github.com/alisabevers' target='_blank' className='footer-link'>Alisa Bevers</a></p>
                <p> | </p>
                <p><a href='https://github.com/cmthom' target='_blank' className='footer-link'>Cole Thompson</a></p>
                <p> | </p>
                <p><a href='https://github.com/ddbriggs95' target='_blank' className='footer-link'>Dowling Briggs</a></p>
                <p> | </p>
                <p><a href='https://github.com/blee241' target='_blank' className='footer-link'>Bryant Lee</a></p>
                <p> | </p>
                <p><a href='https://github.com/juebele' target='_blank' className='footer-link'>James Uebele</a></p>
            </div>
            {/* <div className='container-fluid col links'>
                <p className='container-fluid row justify-content-center'>Home</p>
                <p className='container-fluid row justify-content-center'>Sign Up</p>
                <p className='container-fluid row justify-content-center'>Log In</p>
            </div> */}
        </div>
    )
}


export default Footer;

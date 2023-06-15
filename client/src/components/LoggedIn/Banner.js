import React from 'react';
const image = require('../../Assets/imgs/banner.jpg');

export default function Banner() {
    return(
        <div className='row col'>
            <div className="">
                <img src={image} className='w-100' style={{ height: '350px', objectFit: 'cover' }} alt='Banner'/>
            </div>
        </div>
    )
}
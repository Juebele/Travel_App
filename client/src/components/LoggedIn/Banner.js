import React from 'react';
const image = require('../../Assets/imgs/banner.jpg');

export default function Banner() {
    return(
        <div>
            <div className="row">
                <img src={image}/>
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

export default function Dates() {
    const { error, data } = useQuery(GET_DATES);

    const getDateData = async () => {
        try {
            const res = await fetch('http://localhost:3001/graphql');
            const incomingData = await res.json();
            setData(incomingData);
            console.log(incomingData)
        } catch (err) {
            console.log(err);
        }
    }

    getDateData();

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}
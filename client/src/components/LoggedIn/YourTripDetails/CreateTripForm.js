import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../../../utils/mutations';

function CreateTripForm() {

    const userid = Auth.getProfile()?.data?._id;

    const [tripInfo, setTripInfo] = useState({
        tripName: '',
        location: '',
        startDate: '',
        endDate: '',
        lodgingName: '',
        lodgingAddress: '',
        lodgingContact: '',
        userid: userid
    });

    const [ addTrip, {error} ] = useMutation(ADD_TRIP);

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        setTripInfo({...tripInfo, [name]: value})
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addTrip({
                variables: {
                    ...tripInfo
                }
            })
            window.location.reload();
            console.log(data);

        } catch (err) {
            console.log(err);
        }
    };

return (
    <div className='row justify-content-center'>
        <div className="col-md-6 mb-4 shadow">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="tripName" className="form-label mt-3">Trip Name</label>
                    <input type="text" className="form-control" id="tripName" aria-describedby="emailHelp" 
                    name="tripName"
                    value={tripInfo.tripName}
                    onChange={handleInputChange}
                    required />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="location"
                    name="location"
                    value={tripInfo.location}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <input type="text" className="form-control" id="startDate"
                    name="startDate"
                    value={tripInfo.startDate}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <input type="text" className="form-control" id="endDate"
                    name="endDate"
                    value={tripInfo.endDate}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lodgingName" className="form-label">Lodging Name</label>
                    <input type="text" className="form-control" id="lodgingname"
                    name="lodgingName"
                    value={tripInfo.lodgingName}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lodgingAddress" className="form-label">Lodging Address</label>
                    <input type="text" className="form-control" id="lodgingaddress"
                    name="lodgingAddress"
                    value={tripInfo.lodgingAddress}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lodgingContact" className="form-label">Lodging Contact</label>
                    <input type="text" className="form-control" id="lodgingcontact"
                    name="lodgingContact"
                    value={tripInfo.lodgingContact}
                    onChange={handleInputChange}
                    required />
                </div>
                <button type="submit" className="btn btn-primary mb-3">Create Trip</button>
            </form>
        </div>
    </div>
    )

}
 export default CreateTripForm;
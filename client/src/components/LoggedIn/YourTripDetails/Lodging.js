import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_TRIP } from "../../../utils/queries";
import UpdateTripBtn from "../../UpdateTripBtn";

export default function Lodging({ id }) {
  const { loading, data } = useQuery(QUERY_TRIP, {
    variables: { tripid: id },
  });
  const trip = data?.trip || [];
  console.log(trip);

  const [lodgingName, setLodgingName] = useState();
  const [lodgingAddress, setLodgingAddress] = useState();
  const [lodgingContact, setLodgingContact] = useState();

  //include logic to get lodging by query

  // const { loading, data } = useQuery(QUERY_ME);
  // //CURSED CURSED CURSED CURSED
  // const selectedTrip = window.location.pathname.split('/').pop();
  // console.log(selectedTrip);
  // //console.log(data);
  // console.log(data.me.trips.filter(trip => trip._id === selectedTrip))
  // const trip = data.me.trips.filter(trip => trip._id === selectedTrip)
  // console.log(trip);
  // console.log(trip[0]._id)

  return (
    <div>
      <div className="card mx-auto mb-4" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Lodging</h5>
          <div className="row">
            <div className="col-6">
              <p className="fw-bold mb-1">Lodging Name:</p>
              <p>{trip.lodgingName}</p>
              <input
                onChange={(event) => setLodgingName(event.target.value)}
                type="text"
                defaultValue={lodgingName}
              ></input>
            </div>
            <div className="col-6">
              <p className="fw-bold mb-1">Lodging Address:</p>
              <p>{trip.lodgingAddress}</p>
              <input
                onChange={(event) => setLodgingAddress(event.target.value)}
                type="text"
                defaultValue={lodgingAddress}
              ></input>
            </div>
            <div className="col-6">
              <p className="fw-bold mb-1">Lodging Contact:</p>
              <p>{trip.lodgingContact}</p>
              <input
                onChange={(event) => setLodgingContact(event.target.value)}
                type="text"
                defaultValue={lodgingContact}
              ></input>
            </div>
          </div>
          <div>
            <UpdateTripBtn
              userTrip={data}
              lodgingName={lodgingName}
              lodgingAddress={lodgingAddress}
              lodgingContact={lodgingContact}
            />
          </div>
          <div id="external-sites">
            <ul id="hotel-sites">
              <button className="btn btn-primary">
                <li>
                  <a href="https://www.expedia.com/Hotels" target="_blank">
                    find hotels at Expedia
                  </a>
                </li>
              </button>
              <button className="btn btn-primary">
                <li>
                  <a href="https://www.travelocity.com/" target="_blank">
                    find hotels at Travelocity
                  </a>
                </li>
              </button>
            </ul>
            <ul>
              <button className="btn btn-primary">
                <li>
                  <a href="https://www.airbnb.com/" target="_blank">
                    find stays at AirBNB
                  </a>
                </li>
              </button>
              <button className="btn btn-primary">
                <li>
                  <a href="https://www.vrbo.com/" target="_blank">
                    find stays at Vrbo
                  </a>
                </li>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="card mx-auto mb-4 shadow border-primary" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Lodging</h5>
          <div className="row">
            <div className="col-4">
              <p className="fw-bold mb-1 d-flex justify-content-center">Lodging Name:</p>
              <p className="mb-2 d-flex justify-content-center">{trip.lodgingName}</p>
              <div className="d-flex justify-content-center">
                <input
                  onChange={(event) => setLodgingName(event.target.value)}
                  type="text"
                  defaultValue={lodgingName}
                  className="lodgingInput"
                ></input>
              </div>
            </div>
            <div className="col-4">
              <p className="fw-bold mb-1 d-flex justify-content-center">Lodging Address:</p>
              <p className="mb-2 d-flex justify-content-center">{trip.lodgingAddress}</p>
              <div className="d-flex justify-content-center">
                <input
                  onChange={(event) => setLodgingAddress(event.target.value)}
                  type="text"
                  defaultValue={lodgingAddress}
                  className="lodgingInput"
                ></input>
              </div>
            </div>
            <div className="col-4">
              <p className="fw-bold mb-1 d-flex justify-content-center">Lodging Contact:</p>
              <p className="mb-2 d-flex justify-content-center">{trip.lodgingContact}</p>
              <div className="d-flex justify-content-center">
                <input
                  onChange={(event) => setLodgingContact(event.target.value)}
                  type="text"
                  defaultValue={lodgingContact}
                  className="lodgingInput"
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            <UpdateTripBtn
              userTrip={data}
              lodgingName={lodgingName}
              lodgingAddress={lodgingAddress}
              lodgingContact={lodgingContact}
            />
          </div>
          <div id="external-sites" className="mb-3">
            <hr/>
            <h5 className="d-flex justify-content-center fw-bold mb-3">External Sites</h5>
            <div className="row">
              <div className="col-6 d-flex justify-content-center my-1">
                <button className="btn btn-primary shadow">
                  <a className="externalLink" href="https://www.expedia.com/Hotels" target="_blank">
                    Find hotels at Expedia
                  </a>
                </button>
              </div>
              <div className="col-6 d-flex justify-content-center my-1">
                <button className="btn btn-primary shadow">
                  <a className="externalLink" href="https://www.travelocity.com/" target="_blank">
                    Find hotels at Travelocity
                  </a>
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-6 d-flex justify-content-center my-1">
                <button className="btn btn-primary shadow">
                  <a className="externalLink" href="https://www.airbnb.com/" target="_blank">
                    Find stays at AirBNB
                  </a>
                </button>
              </div>
              <div className="col-6 d-flex justify-content-center my-1">
                <button className="btn btn-primary shadow">
                  <a className="externalLink" href="https://www.vrbo.com/" target="_blank">
                    Find stays at Vrbo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Logo from '../Assets/imgs/BonVoyageLogo.png';

function Navbar() {

    const loggedOut = (event) => {
        event.preventDefault();
        Auth.logout();
    }

    const renderTrips = (event) => {
        event.preventDefault();
        window.location.assign('/your-trips');
    }

    return (
        <div>
            {Auth.loggedIn() ? (
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div id="customNav" className="container-fluid">
                    <a className="navbar-brand" href="/"><img id="logo" src={Logo} alt="Bon Voyage logo"/></a>
                    <div className="navbar-nav d-flex">
                        {/* <button className="btn btn-light" onClick={renderTrips}>Your Trips</button> */}
                        <button className="btn btn-light" onClick={loggedOut}>Logout</button>
                    </div>
                </div>
            </nav>
            ) : (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div id="customNav" className="container-fluid">
                <a className="navbar-brand" href="/"><img id="logo" src={Logo} alt="Bon Voyage logo"/></a>
                    <div className="navbar-nav d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link">
                                <Link className="customLink" to={`/login`}>
                                    Log In
                                </Link>
                            </li>
                            <li className="nav-item nav-link">
                                <Link className="customLink" to={`/sign-up`}>
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            )}
        </div>
    )
}

export default Navbar;
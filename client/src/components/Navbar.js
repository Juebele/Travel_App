import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div id="customNav" className="container-fluid">
                    <a id="logo" className="navbar-brand" href="/">Travel App Name</a>
                    <div className="navbar-nav d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link">
                                <Link className="customLink" to={`/login`}>
                                    Login
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
        </div>
    )
}

export default Navbar;
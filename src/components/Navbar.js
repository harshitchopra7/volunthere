import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from './logo.png';


function Navbar() {
    return (
        <nav className="navbar navbar-fixed-top navbar-expand-lg">
            <div className="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#mainNavbar" className="navbar-toggle" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" />
                </button>
                <Link to="/"><a className="navbar-brand" href="#pageTop"><span className="logo-section"><img alt="" src={logo} /> VoluntHere</span></a></Link>
            </div>
            <div className="collapse navbar-collapse" id="mainNavbar">
                <ul className="list-inline nav navbar-nav left-section ml-auto">
                    <li className="nav-item"><a className="nav-link"><Link to="/aboutus">AboutUs</Link></a></li>
                    <li className="nav-item"><a className="nav-link"><Link to="/joinus">Join Us</Link></a></li>
                    <li id="applyBtn" className="nav-item"><a className="nav-link"><Link to='/opportunities'>Apply</Link></a></li>
                </ul>
            </div>
        </nav>

    );
}
export default Navbar;
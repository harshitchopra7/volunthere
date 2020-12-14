import React from 'react';
import './AboutUs.css';
import team1 from './team1.jpg';
import team2 from './team2.jpg';
import team3 from './team3.jpg';
import team4 from './team4.jpg';
import team5 from './team5.jpg';
import team6 from './team6.jpg';

function AboutUs() {
    return (
        <div className="container aboutus">
        <div className="row">
            <div className="col-md-12 ">
                <div className="card">
                    <div className="card-body">
                        <div className="card-container">
                            <img className="card-image" alt="" src={team1} />
                            <div>
                                <p>Shardul Tamane</p>
                                <p>BITS Pilani,</p>
                                <p>Hyderabad</p>
                            </div>
                        </div>
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default AboutUs;
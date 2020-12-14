import React from 'react';
import './Opportunities.css';
import './JoinUs.css';
import banner3 from './banner3.png';
import logo from './logo.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';

function JoinUs() {
    return (
        <div className="tc">
            <div className="container-fluid">
                <section id="banner">
                    <div className="banner-image-container">
                        <div className="banner-image">
                            <img src={banner3} />
                        </div>
                    </div>
                </section>
            </div>

            <div className="card tc" style={{ width: '29rem' }}>
                <img className="card-img-top" src={logo} style={{width: '20rem'}} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title name">VoluntHere</h5>
                    <p className="card-text">
                        <p className="title b">Outreach Associate</p>
                        <p className="description"><LocationOnIcon /> Work from home</p>
                        <p className="description"><DateRangeIcon /> 3 months (negotiable)</p>
                    </p>
                    <a className="btn btn-primary btn-stylee">Apply now</a>
                </div>
            </div>

            <div className="card tc" style={{ width: '29rem' }}>
                <img className="card-img-top" src={logo} style={{width: '20rem'}} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title name">VoluntHere</h5>
                    <p className="card-text">
                        <p className="title b">Graphic Designer</p>
                        <p className="description"><LocationOnIcon /> Work from home</p>
                        <p className="description"><DateRangeIcon /> 3 months (negotiable)</p>
                    </p>
                    <a className="btn btn-primary btn-stylee">Apply now</a>
                </div>
            </div>

            {/* <section id="apply">
                <div className="opportunities">
                    <div className="opportunity-container">
                        <div className="row flex-override">
                            <div className="col-md-4 vertical-align-center">
                                <div className="valign-center opportunity-image-container">
                                    <div className="opportunity-image">
                                        <img src={logo} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h2>VoluntHere</h2>
                                <p>Roles : Outreach Associate</p>
                                <p>Perks : Certificates, Build strong industry network, Chance to intern at best NGOs that associate with VoluntHere</p>
                                <p><DateRangeIcon />3 months (negotiable)</p>
                                <p><LocationOnIcon />Work from home (Pan India)</p>
                                <div className="text-center">
                                    <button type="button"><a href="volunthere-outreach-associate.html">Apply</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opportunity-container">
                        <div className="row flex-override">
                            <div className="col-md-4 vertical-align-center">
                                <div className="valign-center opportunity-image-container">
                                    <div className="opportunity-image">
                                        <img src={logo} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h2>VoluntHere</h2>
                                <p>Roles : Graphic Designer</p>
                                <p>Perks : Certificates, Build strong industry network, Chance to intern at best NGOs that associate with VoluntHere</p>
                                <p><DateRangeIcon />3 months (negotiable)</p>
                                <p><LocationOnIcon />Work from home (Pan India)</p>
                                <div className="text-center">
                                    <button type="button"><a href="volunthere-graphic-designer.html">Apply</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
}
export default JoinUs;
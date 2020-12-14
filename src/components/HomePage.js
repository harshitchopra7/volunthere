import React from 'react';
import './HomePage.css';
import banner1 from './banner1.png'
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import stock1 from './stock1.jpg';
import stock2 from './stock2.jpg';
import team1 from './team1.jpg';
import team2 from './team2.jpg';
import team3 from './team3.jpg';
import team4 from './team4.jpg';
import team5 from './team5.jpg';
import team6 from './team6.jpg';

function HomePage() {
    return (
        <div className="container-fluid">
            <section id="banner">
                <div className="banner-image-container">
                    <div className="banner-image">
                        <img alt="" src={banner1} />
                    </div>
                </div>
            </section>

            <section id="cause">
                <h1 className="text-center">Cause</h1>
                <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-4">
                        <div className="cause-container">
                            <div className="cause-image-container">
                                <div className="cause-image">
                                    <img alt="" src={icon1} />
                                </div>
                            </div>
                            <div className="cause-text-container">
                                There are <b>3.1 million</b> NGOs in India and their daily operations depend on <b>enthusiastic volunteers</b> willing to use their skills to help a cause. Depending on the size, organizations might need from <b>10-500 volunteers</b>.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-4">
                        <div className="cause-container">
                            <div className="cause-image-container">
                                <div className="cause-image">
                                    <img alt="" src={icon2} />
                                </div>
                            </div>
                            <div className="cause-text-container">
                                NGOs need volunteers with <b>diverse skill sets</b> to carry out their various activities. We provide a <b>robust platform</b> for students to find the <b>right volunteering opportunities</b>.
          </div>
                        </div>
                    </div>
                    <div className="col-md-1" />
                </div>
            </section>
            <hr />
            <section id="features">
                <h1 className="text-center">Community</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="feature-container" style={{ backgroundColor: '#5ce1e6' }}>
                            <div className="feature-image-container">
                                <div className="feature-image">
                                    <img alt="" src={icon3} />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                Connect with NGOs serving causes that you care about, to create a lasting change. Use your skills to serve a purpose.
          </div>
                            <button><a href="opportunities.html">Volunteer</a></button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-container" style={{ backgroundColor: '#38b6ff' }}>
                            <div className="feature-image-container">
                                <div className="feature-image">
                                    <img alt="" src={icon4} />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                Our mission is to provide NGOs and volunteers a streamlined process to simplify the volunteering process. Don't let the hassle of finding an NGO to volunteer at deter you.
          </div>
                            <button><a href="#contact">Get in Touch</a></button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="feature-container" style={{ backgroundColor: '#5271ff' }}>
                            <div className="feature-image-container">
                                <div className="feature-image">
                                    <img alt="" src={icon5} />
                                </div>
                            </div>
                            <div className="feature-text-container">
                                NGOs can partner with us to list volunteering positions, we will help you connect with the best university talent.
          </div>
                            <button><a href="#contact">Partner</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="about" className="text-center">
                <h1>About Us</h1>
                <div className="text-center about-container row flex-override">
                    <div className="col-md-6 vertical-align-center">
                        <div className="valign-center">
                            <p>We are an enthusiastic team of undergrads who have worked with socially conscious organisations in various capacities. While doing so, we saw the challenges faced by these organisations and recruiting the correct individuals was
                            always difficult.
          </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image-container">
                            <div className="about-image">
                                <img alt="" src={stock1} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center about-container row flex-override">
                    <div className="col-md-6">
                        <div className="about-image-container">
                            <div className="about-image">
                                <img alt="" src={stock2} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 vertical-align-center">
                        <div className="valign-center">
                            <p>With VoluntHere, we wish to solve this problem by providing a means for such organisations to directly interact with interested individuals and develop a culture of Individual Social Responsibility
          </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section id="contact" className="text-center">
                <h2>Contact Us</h2>
                <p>Connect with us by filling out the below details, we will try and reach out as soon as possible!</p>
                <form action="contact.php" method="POST">
                    <input type="text" placeholder="Name * " name="name" autoComplete="name" required /><br />
                    <input type="email" placeholder="Email * " name="email" autoComplete="email" required /><br />
                    <input type="tel" placeholder="Number (10 digits)" name="mobile" autoComplete="number" pattern="[0-9]{10}" /><br />
                    <select name="customer-type" required>
                        <option value="ngo">NGO</option>
                        <option value="volunteer">Volunteer</option>
                    </select><br />
                    <textarea type="text" placeholder="Message" name="message" autoComplete="message" defaultValue={""} /><br />
                    <button type="submit"> Send </button>
                </form>
            </section>
            <hr />
            <section id="team">
                <h1>The Team</h1>
                <div className="text-center row">
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team1} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Shardul Tamane</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>BITS Pilani,</h5>
                                <h5>Hyderabad</h5>
                                <h4><a href="https://www.linkedin.com/in/shardul-tamane" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team2} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Ishan Khasnis</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>BITS Pilani,</h5>
                                <h5>Hyderabad</h5>
                                <h4><a href="https://www.linkedin.com/in/ishankhasnis" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team3} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Adhithyaram S</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>TSEC,</h5>
                                <h5>Mumbai</h5>
                                <h4><a href="https://www.linkedin.com/in/adhithyaram-s" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team4} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Aakash Bansal</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>BITS Pilani,</h5>
                                <h5>Hyderabad</h5>
                                <h4><a href="https://www.linkedin.com/in/aakashban/" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team5} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Pranav Sistla</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>BITS Pilani,</h5>
                                <h5>Hyderabad</h5>
                                <h4><a href="https://www.linkedin.com/in/pranav-sistla-98a46a1b0/" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="team-container">
                            <div className="team-image-container">
                                <div className="team-image">
                                    <img alt="" src={team6} />
                                </div>
                            </div>
                            <div className="team-text-container">
                                <h4><b>Nitya Gupta</b></h4>
                                {/*<h4>Co-founder</h4>*/}
                                <h5>BITS Pilani,</h5>
                                <h5>Hyderabad</h5>
                                <h4><a href="https://www.linkedin.com/in/nitya-gupta-1ba82a18a/" target="_blank"><i className="fa fa-linkedin" /></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}
export default HomePage;
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <section className="footer-above text-center row">
                <div className="col-md-4">
                    <h3>Location</h3>
                    <h4>Mumbai</h4>
                    <h4>India</h4>
                </div>
                <div className="col-md-4">
                    <h3>Get in touch :</h3>
                    <h4><i className="fa fa-envelope" /> : <a href="mailto: connect@volunthere.in" target="_blank">connect@volunthere.in</a></h4><a href="mailto: connect@volunthere.in" target="_blank">
                    </a><h4><a href="mailto: connect@volunthere.in" target="_blank"><i className="fa fa-phone" /> : </a><a href="tel:+91-75892-68096" target="_blank">+91 75892-68096</a></h4>
                </div>
                <div className="col-md-4" id="social">
                    <h3>Find VoluntHere on:</h3>
                    <button className="btn-social"><a target="_blank" href="https://www.linkedin.com/company/volunthere/"><i className="fa fa-linkedin" /></a></button>
                    <button className="btn-social"><a target="_blank" href="https://www.facebook.com/voluntHereIndia/"><i className="fa fa-facebook" /></a></button>
                    <button className="btn-social"><a target="_blank" href="https://www.instagram.com/volunthere"><i className="fa fa-instagram" /></a></button>
                    <button className="btn-social"><a target="_blank" href="https://twitter.com/VoluntHereApp"><i className="fa fa-twitter" /></a></button>
                </div>

            </section>
            <footer className="text-center">
                <p>Copyright © VoluntHere 2020</p>
            </footer>
        </div>

    );
}
export default Footer;
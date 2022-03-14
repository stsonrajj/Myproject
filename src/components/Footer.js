import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
<div className="main-footer widgets-dark typo-light bg-light">
<div className="container">
<div className="row">
  
<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget subscribe no-box">
<h5 className="widget-title">COMPANY NAME<span></span></h5>
<p>About the company, little discription will goes here.. </p>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5 className="widget-title">Quick Links<span></span></h5>
<ul className="thumbnail-widget">
<li>
<div className="thumb-content"><a href="#.">Get Started</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">Top Leaders</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">Success Stories</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">Event/Tickets</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">News</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">Lifestyle</a></div>
</li>
<li>
<div className="thumb-content"><a href="#.">About</a></div>
</li>
</ul>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">
<div className="widget no-box">
<h5>Careers</h5>
                        <ul>
                            <li><a href="#">Job openings</a></li>
                            <li><a href="#">Employee success</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
</div>
</div>

<div className="col-xs-12 col-sm-6 col-md-3">

<div className="widget no-box">
<h5 className="widget-title" style={{"margin-left": "25px"}}>Contact Us<span></span></h5>

<p style={{"margin-left": "25px"}}><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
<ul className="social-footer2 d-flex">
            <li style={{"list-style": "none"}}><a href="#">&nbsp; <FaFacebook size='2rem'/></a></li>
            <li style={{"list-style": "none"}}><a href="#">&nbsp;<FaTwitterSquare size='2rem' /></a></li>
            <li style={{"list-style": "none"}}><a href="#">&nbsp;<FaInstagram size='2rem' /></a></li>
</ul>
</div>
</div>

</div>
</div>
</div>
  
<div className="footer-copyright">
<div className="container">
<div className="row">
<div className="col-md-12 text-center">
<p>Copyright Company Name © 2021. All rights reserved.</p>
</div>
</div>
</div>
</div>
</div>
  );
}

export default Footer;

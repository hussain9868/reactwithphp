import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-white py-3 mt-auto">
    <div className="container text-center">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>Providing quality services with excellence.</p>
        </div>
        <div className="col-md-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
            <li><Link className="text-white text-decoration-none" to="/about">About</Link></li>
            <li><Link className="text-white text-decoration-none" to="/services">Services</Link></li>
            <li><Link className="text-white text-decoration-none" to="/portfolio">Portfolio</Link></li>
            <li><Link className="text-white text-decoration-none" to="/contactus">Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Contact</h5>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <hr className="border-light my-2" />
      <p className="mb-0">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

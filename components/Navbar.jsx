import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg  text-white">
        <div className="container-fluid mx-5">
          <img
            src="https://expologistics.info/wp-content/uploads/2021/04/1-e1693579066956.png"
            alt=""
            width={150}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nav-ul text-white">
              <li className="nav-item mx-2 fs-6 fw-bold">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 fs-6 fw-bold text-white">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2 fs-6 fw-bold text-white">
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item mx-2 fs-6 fw-bold text-white">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav-side">
              <h6>Emergency? <br />Call: +2297157499</h6>
              <button type="button" className="btn btn-light mx-5">Get a Quote</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="" alt="" />
        <Link to="/" className="title">
          CrypTrack
        </Link>
      </div>
      <div className="nav-list">
        <ul className="list">
          <li className="list-item">
            <Link to="/">Homepage</Link>
          </li>
          <li className="list-item">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </li>
          {/* <li className="list-item">
            <Link to="/cryptoDetails">Crypto Details</Link>
          </li> */}
          {/* <li className="list-item">
            <Link to="/coins">Coins</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
        <Link to="/" className="title">
          CrypTrack
        </Link>
      </div>
      <div className="nav-list">
        <ul className="list">
          <li className="list-item">
            <NavLink activeClassName="active" to="/">
              Homepage
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink activeClassName="active" to="/cryptocurrencies">
              Cryptocurrencies
            </NavLink>
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

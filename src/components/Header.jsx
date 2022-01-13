import React from "react";
import { Link} from 'react-router-dom'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import { useSelector } from "react-redux";
const Header = () => {
  const {cartItems} =useSelector(state=>state.cartReducer)
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light nav-bg  ">
        <div className="container-fluid">
          <Link className="navbar-brand"  to='/'>
             Fire Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" "><FaBars color="white" /> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"  to=''>
                   User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/order">
                   Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="logout">
                   Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/cart">
                     <FaCartPlus /> {cartItems.length}
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { Link} from 'react-router-dom'
import {FaBars, FaCartPlus} from 'react-icons/fa'
import { useSelector } from "react-redux";
const Header = () => {
  const {cartItems} =useSelector(state=>state.cartReducer)
  const {user} = JSON.parse(localStorage.getItem('currentUser'))
  const logout=()=>{
    localStorage.removeItem('currentUser')
    window.location.reload()
  }
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
                   {user.email.substring(0,user.email.length -10)}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="/order">
                   Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"  to="logout" onClick={logout}>
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

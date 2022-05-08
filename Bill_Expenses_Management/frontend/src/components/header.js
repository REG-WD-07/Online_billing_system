import React from "react";
import {Link, link} from "react-router-dom";


function Header() {

    return (

<div>


<nav className="navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Budget Buddy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Budget Buddy</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="#">Add service profile</a></li>
              <li><a className="dropdown-item" href="#">Manage services</a></li>
              <li><a className="dropdown-item" href="#">View service profile</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bill Payment
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="add">Pay bills</a></li>
              <li><a className="dropdown-item" href="view">Payment history</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Payment Method
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="card">Add payment method</a></li>
              <li><a className="dropdown-item" href="#">Edit payment method</a></li>
              <li><a className="dropdown-item" href="#">Remove payment method</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enquiries
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="#">My enquiries</a></li>
              <li><a className="dropdown-item" href="#">New enquiries</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Expenses
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="/add">Add a bill</a></li>
              <li><a className="dropdown-item" href="#">Manage bills</a></li>
              <li><a className="dropdown-item" href="#">View added bills</a></li>
              <li><a className="dropdown-item" href="#">Calculate total expenses</a></li>
              <li><a className="dropdown-item" href="#">View total expenses</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>

        </ul>
        
      </div>
    </div>
  </div>
</nav>


</div>

    )
}

export default Header;
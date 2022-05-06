import React from "react";
import './Header.css'



function Header() {

    

    return (

      
<div class="row">


<nav class="navbar navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Budget Buddy</a>
    <div class="d-grid gap-2 d-md-block">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Log in</button>
        <button class="btn btn-primary" type="button">Sign up</button>
      </div>   
</div>


    <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Budget Buddy</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div>
        
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            {/* <Link to="/">Home</Link> */}
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Add service profile</a></li>
              <li><a class="dropdown-item" href="#">Manage services</a></li>
              <li><a class="dropdown-item" href="#">View service profile</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bill Payment
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="add">Pay bills</a></li>
              <li><a class="dropdown-item" href="view">Payment history</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Payment Method
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="insert">Add payment method</a></li>
              <li><a class="dropdown-item" href="selectcard">Edit payment method</a></li>
              <li><a class="dropdown-item" href="selectcard">Remove payment method</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enquiries
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">My enquiries</a></li>
              <li><a class="dropdown-item" href="#">New enquiries</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Expenses
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Add a bill</a></li>
              <li><a class="dropdown-item" href="#">Manage bills</a></li>
              <li><a class="dropdown-item" href="#">View added bills</a></li>
              <li><a class="dropdown-item" href="#">Calculate total expenses</a></li>
              <li><a class="dropdown-item" href="#">View total expenses</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
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
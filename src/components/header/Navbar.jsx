
import React from 'react'
import DropdownMenu from "./DropdownMenu"
import StorySection from "../storysection/StorySection"
const Navbar = () => {
  return (
    <div className="container-fluid" style={{margin:"0px",padding:"0px"}}>
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        {/* <!-- Navbar Toggler for Mobile View --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Kids
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Find a Store
              </a>
            </li>
          </ul>

          {/* <!-- Centered Logo --> */}
          <a className="navbar-brand " href="#">
            <img
              src="https://themesflat.co/html/ecomus/images/logo/women-logo.svg"
              alt="Logo"
              width="120"
              height="40"
            />
          </a>

          {/* <!-- Right-aligned Search Bar --> */}
          <div className="d-flex ms-auto gap-3">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
    <DropdownMenu />
    <StorySection />
  </div>
  )
}

export default Navbar

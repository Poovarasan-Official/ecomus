export default function DropdownMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container-fluid">
          {/* <!-- Navbar Toggler for Mobile View --> */}
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

          {/* <!-- Navbar Links --> */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {/* <!-- Home --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="homeDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home 2
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Shop --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="shopDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Shop Grid
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shop List
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Products --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="productsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="productsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Product 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Product 2
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Pages --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Blog --> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>

              {/* <!-- Buy Now --> */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

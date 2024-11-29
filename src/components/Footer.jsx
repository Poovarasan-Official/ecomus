
const Footer = () => {
  return (
    <div className="container-fluid">
    <footer className="p-4">
      <div className="row">
        {/* <!-- Brand Logo --> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* <h5 className="mb-3">Brand</h5> */}
          <a href="#">
            <img
              src="https://themesflat.co/html/ecomus/images/logo/logo.svg"
              alt="Brand Logo"
              width="140"
              className="mb-4"
            />
          </a>
          <p>
            Address: 1234 Fashion Street, Suite 567,
            <br /> New York, NY 10001
            <br />
            Email: info@fashionshop.com
            <br /> Phone: (212) 555-1234
          </p>
          <div className="gap mt-3 d-flex align-items-center">
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-x-twitter fa-2x"></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a href="#" className="text-decoration-none me-3">
              <i className="fa-brands fa-tiktok fa-2x"></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="fa-brands fa-pinterest fa-2x"></i>
            </a>
          </div>
        </div>

        {/* <!-- Help Section --> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="mb-3">Help</h5>
          <ul className="list-unstyled ">
            <li className="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#">Returns + Exchanges</a>
            </li>
            <li className="mb-2">
              <a href="#">Shipping</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="mb-2">
              <a href="#">FAQ’s</a>
            </li>
            <li className="mb-2">
              <a href="#">Compare</a>
            </li>
            <li className="mb-2">
              <a href="#">My Wishlist</a>
            </li>
          </ul>
        </div>

        {/* <!-- About Us Section --> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 className="mb-3">About Us</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className=" text-decoration-none">
                Our Story
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" text-decoration-none">
                Visit Our Store
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" text-decoration-none">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className=" text-decoration-none">
                Account
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Sign Up for Email --> */}
        <div className="col-lg-3 col-md-6">
          <h5 className="mb-3">Sign Up for Email</h5>
          <p>
            Sign up to get first dibs on new arrivals, sales, exclusive
            content, events and more!
          </p>
          <form>
            <div className="d-flex mb-3">
              <input
                type="email"
                className="form-control gap-1"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
              >
                Subscribe
                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        {/* <!-- Left side: Copyright Text --> */}
        <div className="left">
          <p className="mb-0">© 2024 Ecomus Store. All Rights Reserved</p>
        </div>

        {/* <!-- Right side: Payment Icons --> */}
        <div className="right">
          <i className="fab fa-cc-visa fa-2x me-3"></i>
          <i className="fab fa-cc-mastercard fa-2x me-3"></i>
          <i className="fab fa-cc-paypal fa-2x"></i>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer

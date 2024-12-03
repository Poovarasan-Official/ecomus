const Footer = () => {
  return (
    <div className="container-fluid">
    <footer className="p-4">
      <div className="row d-flex flex-column flex-md-row">
        {/* <!-- Brand Logo Section --> */}
        <div className="col mb-4">
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
          <div className="gap mt-3 d-flex justify-content-center justify-content-md-start">
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
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">Help</h5>
          <ul className="list-unstyled text-center text-md-start">
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Returns + Exchanges</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Shipping</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Terms & Conditions</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">FAQ’s</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Compare</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">My Wishlist</a>
            </li>
          </ul>
        </div>
  
        {/* <!-- About Us Section --> */}
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">About Us</h5>
          <ul className="list-unstyled text-center text-md-start">
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Our Story</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Visit Our Store</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-decoration-none">Account</a>
            </li>
          </ul>
        </div>
  
        {/* <!-- Sign-Up Section --> */}
        <div className="col mb-4">
          <h5 className="mb-3 text-center text-md-start">Sign Up for Email</h5>
          <p className="text-center text-md-start">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <form>
            <div className="d-flex flex-column flex-md-row gap-2">
              <input
                type="email"
                className="form-control mb-2 mb-md-0"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="btn btn-dark d-flex align-items-center justify-content-center"
              >
                Subscribe
                <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* <!-- Footer Bottom Section --> */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <p className="mb-2 mb-md-0 text-center">© 2024 Ecomus Store. All Rights Reserved</p>
        <div className="d-flex justify-content-center">
          <i className="fab fa-cc-visa fa-2x me-3"></i>
          <i className="fab fa-cc-mastercard fa-2x me-3"></i>
          <i className="fab fa-cc-paypal fa-2x"></i>
        </div>
      </div>
    </footer>
  </div>
  
  
  );
};

export default Footer;

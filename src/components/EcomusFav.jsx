import React from "react";
import imagef1 from "../components/ecomusfav-pics/orange-1.jpg";
import imagef2 from "../components/ecomusfav-pics/brown.jpg";

import imagef3 from "../components/ecomusfav-pics/white-2.jpg";
import imagef4 from "../components/ecomusfav-pics/white-3.jpg";
// import imagef5 from '../components/ecomusfav-pics/brown-2.jpg'
// import imagef6 from '../components/ecomusfav-pics/light-green-1.jpg'

function EcomusFav() {
  return (
    <>
      <div className="ecomus-container">
        <div className="ecomus-collections">
          <div className="ecomus-header">
            <h1>Ecomus’s Favorites</h1>
            <p>
              Beautifully Functional. Purposefully Designed. Consciously
              Crafted.
            </p>
          </div>

          <div className="cards-maincontainer">
            <div className="cards-container">
              <div className="cardscontainer1">
                <img src={imagef1} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">Ribbed Tank Top</p>
                  <p className="cardpara2">$16.95</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardscontainer2">
                <img src={imagef2} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">Ribbed modal T-shirt</p>
                  <p className="cardpara2">From $18.95</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardscontainer3">
                <img src={imagef3} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">Oversized Printed T-shirt</p>
                  <p className="cardpara2">$10.00</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardscontainer4">
                <img src={imagef4} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">Oversized Printed T-shirt</p>
                  <p className="cardpara2">$16.95</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="cardscontainer5">
                <img src={imagef5} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">V-neck linen T-shirt</p>
                  <p className="cardpara2">$114.95</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardscontainer6">
                <img src={imagef6} alt="" className="cards" />
                <div className="cardcontent">
                  <p className="cardpara1">Loose Fit Sweatshirt</p>
                  <p className="cardpara2">$10.00</p>
                  <div className="colorchange">
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcomusFav;

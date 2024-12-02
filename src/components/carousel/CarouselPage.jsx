import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../carousel/carousel.css";

const CarouselPage = () => {
  return (
    <>
    <div className="container">
      
    </div>
       <Carousel>
        <Carousel.Item
          style={{
            backgroundImage:
              "url('https://themesflat.co/html/ecomus/images/slider/women-slideshow-1.jpg')",
          }}
          className="carousel-item-custom"
        >
          <div className="carousel-caption text-start">
            <h2>Elegance</h2>
            <p>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{
            backgroundImage:
              "url('https://themesflat.co/html/ecomus/images/slider/women-slideshow-2.jpg')",
          }}
          className="carousel-item-custom"
        >
          <div className="carousel-caption text-start">
            <h2>Boutique</h2>
            <p>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </Carousel.Item>

        <Carousel.Item
          style={{
            backgroundImage:
              "url('https://themesflat.co/html/ecomus/images/slider/women-slideshow-3.jpg')",
          }}
          className="carousel-item-custom"
        >
          <div className="carousel-caption text-start">
            <h2>Luxury</h2>
            <p>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
        </Carousel.Item>
      </Carousel> 
    </>
  );
};

export default CarouselPage;
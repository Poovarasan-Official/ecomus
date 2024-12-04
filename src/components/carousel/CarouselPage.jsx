import Carousel from "react-bootstrap/Carousel";
import "../carousel/carousel.css";

const CarouselPage = () => {
  return (
    <>
       
  <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row">
         <img src="https://themesflat.co/html/ecomus/images/slider/women-slideshow-1.jpg" className="d-block w-100" alt="..." />            
        </div>
        <div className=" carousel-caption text-start text-dark">
            <h2 className="fw-normal" style={{fontSize:"80px"}}>Elegance</h2>
            <p style={{fontSize:"20px"}}>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
      </div>
    <div className="carousel-item ">
      <img src="https://themesflat.co/html/ecomus/images/slider/women-slideshow-2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption text-dark text-start">
            <h2 className="fw-normal" style={{fontSize:"80px"}}>Boutique</h2>
            <p style={{fontSize:"20px"}}>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
    </div>
    <div className="carousel-item">
      <img src="https://themesflat.co/html/ecomus/images/slider/women-slideshow-3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption text-dark text-start">
            <h2 className="fw-normal" style={{fontSize:"80px"}}>Luxury</h2>
            <p style={{fontSize:"20px"}}>From casual formal, we've got you covered</p>
            <button className="btn btn-dark p-3 rounded-pill mt-4 ">
              show collection{" "}
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
          </div>
    </div>
  
  
       {/* <Carousel>
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
      </Carousel>  */}
      </div>
      </div>
    </>
  );
};

export default CarouselPage;
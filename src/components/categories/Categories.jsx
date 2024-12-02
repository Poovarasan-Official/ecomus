import React, { useRef, useState } from "react";
import "../categories/Categories.css";

const Categories = () => {
  const galleryRef = useRef(null);
  const [rightArrow, setRightArrow] = useState(true);
  const [leftArrow, setLeftArrow] = useState(false);

  const smoothScroll = (element, distance, duration) => {
    let start = element.scrollLeft;
    let startTime = performance.now();
    const scroll = (time) => {
      const timeElapsed = time - startTime;
      const scrollAmount = Math.min(timeElapsed / duration, 1) * distance;
      element.scrollLeft = start + scrollAmount;
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };
  const handleRight = () => {
    if (galleryRef.current) {
      smoothScroll(galleryRef.current, 400, 1000);
      setRightArrow(false);
      setLeftArrow(true);
    }
  };
  const handleLeft = () => {
    if (galleryRef.current) {
      smoothScroll(galleryRef.current, -400, 1000);
      setRightArrow(true);
      setLeftArrow(false);
    }
  };

  return (
    <>
    <div className="category-container">
    <h2 className="d-flex justify-content-center mt-5 fw-normal fs-1 heading">
        Categories you might like
      </h2>
      <div
        ref={galleryRef}
        className="container gallary  mt-5"
      >
        <div className="row main-image" style={{ flexWrap: "nowrap", gap: "10px" }}>
          <div className="col-md-auto like">
            <div className="card item ">
              <div className="image-container dress">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-42.jpg"
                  alt="category1"
                  className="w-100 "
                />
              </div>
              <button
                className="btn list rounded-pill fw-normal shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px" }}
              >
                Tops{" "}
                <i
                  className="fa-solid fa-arrow-right ms-1"
                  style={{ color: "#ffffff", fontSize: "10px" }}
                ></i>
              </button>
            </div>
          </div>

          <div className="col-md-auto like">
            <div className="card item ">
              <div className="image-container dress">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-43.jpg"
                  alt="category2"
                  className="w-100 "
                />
                {leftArrow ? (
                  <i
                    className="fa-solid fa-chevron-left  position-absolute angle"
                    style={{
                      top: "50%",
                      right: "250px",
                      transform: "translateY(-50%)",
                      color: "black",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    onClick={handleLeft}
                  ></i>
                ) : (
                  ""
                )}
              </div>
              <button
                className="btn  list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded w-50 "
              >
                Sweatshirts{" "}
                <i
                  className="fa-solid fa-arrow-right ms-1"
                  style={{ color: "#ffffff", fontSize: "10px" }}
                ></i>
              </button>
            </div>
          </div>

          <div className="col-md-auto like">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-44.jpg"
                  alt="category3"
                  className="w-100"
                />
              </div>
              <button
                className="btn list rounded-pill fw-normal shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px" }}
              >
                Swim{" "}
                <i
                  className="fa-solid fa-arrow-right ms-1"
                  style={{ color: "#ffffff", fontSize: "10px" }}
                ></i>
              </button>
            </div>
          </div>

          <div className="col-md-auto like">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-45.jpg"
                  alt="category4"
                  className="w-100"
                />
                {rightArrow ? (
                  <i
                    className="fa-solid fa-chevron-right arr position-absolute angle"
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                      color: "black",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                    onClick={handleRight}
                  ></i>
                ) : (
                  ""
                )}
              </div>
              <button
                className="btn list rounded-pill fw-normal shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px" }}
              >
                Dresses{" "}
                <i
                  className="fa-solid fa-arrow-right ms-1"
                  style={{ color: "#ffffff", fontSize: "10px" }}
                ></i>
              </button>
            </div>
          </div>

          <div className="col-md-auto like">
            <div className="card item">
              <div className="image-container dress">
                <img
                  src="https://themesflat.co/html/ecomus/images/collections/collection-46.jpg"
                  alt="category5"
                  className="w-100"
                />
              </div>
              <button
                className="btn list rounded-pill fw-normal shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "120px" }}
              >
                Cardigans{" "}
                <i
                  className="fa-solid fa-arrow-right ms-1"
                  style={{ color: "#ffffff", fontSize: "10px" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container  mt-5">
        <div className="row pick-container row-cols-1 row-cols-md-2 g-5 justify-content-center">
          <div className="col-auto pick" >
            <div className="card">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-47.jpg"
                className="card-img"
                alt="collecton 1"
              />
              <div className="text-overlay text-center">
                <p>The Janury Collection</p>
                <button className="btn collection rounded-pill fw-medium  shadow p-2  mt-3 bg-body-tertiary rounded ms-5">
                  Shop now
                </button>
              </div>
            </div>
          </div>
          <div className="col-auto pick">
            <div className="card ">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-48.jpg"
                className="card-img"
                alt="collection 2"
              />
              <div className="text-overlay">
                <p>Olympila's Picks</p>
                <button className="btn collection rounded-pill fw-medium  shadow p-2  mt-3 bg-body-tertiary rounded ms-5">
                  Shop now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Categories;

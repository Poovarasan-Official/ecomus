import React, { useState } from "react";
import "../categories/Categories.css";

const Categories = () => {
  const [toggle,setToggle] = useState(false);
  const handleChange = () =>{
    if(toggle == true){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }
  return (
    <>
      <h2 className="d-flex justify-content-center mt-5 fw-normal fs-1">
        Categories you might like
      </h2>
          
      <div className="container d-flex mt-5">
     
        <div className="row row-cols-1 row-cols-md-4 g-5">
          {toggle ? "" :
          <div className="col">
            <div className="card item">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-42.jpg"
                alt="categori1"
              />
              <button
                className="btn list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px", marginLeft: "100px" }}
              >
                Tops  
              </button>
            </div>
          </div>
           }
          <div className="col">
            <div className="card item">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-43.jpg"
                alt="categori2"
              />
              <button
                className="btn list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded w-50 "
                style={{ marginLeft: "80px" }}
              >
                Sweatshirts
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card item">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-44.jpg"
                alt="categori3"
              />
              <button
                className="btn list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px", marginLeft: "100px" }}
              >
                Swim
              </button>
            </div>
          </div>
          <div className="col">
            <div className="card item">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-45.jpg"
                alt="categori4"
              />
              
              <button
                className="btn list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px", marginLeft: "100px" }}
              >
                Dresses
              </button>
            </div>
          </div>  
          {   toggle ?
          <div className="col">
            <div className="card item">
              <img
                src="https://themesflat.co/html/ecomus/images/collections/collection-46.jpg"
                alt="categori4"
              />
              <button
                className="btn list rounded-pill fw-normal  shadow p-2 mb-5 bg-body-tertiary rounded"
                style={{ width: "100px", marginLeft: "100px" }}
              >
                Dresses
              </button>
            </div>
          </div> :"" 
          
          } 
        </div>
      </div> 
      <button className="btn btn-primary" onClick={handleChange}>change</button>
      
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-5">
          <div className="col">
          <div className="card">
             <img src="https://themesflat.co/html/ecomus/images/collections/collection-47.jpg" className="card-img" alt="collecton 1" />
           <div className="text-overlay text-center">
               <p className="d-flex">The Janury Collection</p>
               <button className="btn collection rounded-pill fw-medium  shadow p-2  mt-3 bg-body-tertiary rounded ms-5" >Shop now</button>
          </div>
        </div>
          </div>
          <div className="col">
          <div className="card ">
             <img src="https://themesflat.co/html/ecomus/images/collections/collection-48.jpg" className="card-img" alt="collection 2"  />
           <div className="text-overlay">
             <p>Olympila's Picks</p>
             <button className="btn collection rounded-pill fw-medium  shadow p-2  mt-3 bg-body-tertiary rounded ms-5">Shop now</button>
          </div>
        </div>
          </div>
        </div>
      </div> 
   
    </>
  );
};

export default Categories;

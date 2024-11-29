import React from 'react'
import image1 from '../components/brands/brand-01.png'
import image2 from '../components/brands/brand-02.png'
import image3 from '../components/brands/brand-03.png'
import image4 from '../components/brands/brand-04.png'
import image5 from '../components/brands/brand-05.png'
import image6 from '../components/brands/brand-06.png'


function Brands() {
  return<>
  <div className="brand-container">

    <div className="brand-subcontainer">
<img src={image1} alt="image" className="brandimgs" />
<img src={image2} alt="image" className="brandimgs" />
<img src={image3} alt="image" className="brandimgs" />
<img src={image4} alt="image" className="brandimgs" />
<img src={image5} alt="image" className="brandimgs" />
<img src={image6} alt="image" className="brandimgs" />

    </div>
  </div>


  </>
}

export default Brands
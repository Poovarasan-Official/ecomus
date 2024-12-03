import React from 'react'
import Quote from '../peopleFeed/people-feed-img/quote.svg'
import peoplefeedimage1 from '../peopleFeed/people-feed-img/te3.jpg'
import peoplefeedimage2 from '../peopleFeed/people-feed-img/te4.jpg'
import '../peopleFeed/PeopleFeed.css'

function PeopleFeed() {
  return<>
<div className="peoplefeed-container">


<div className="peoplefeed-subcontainer">

<div className="peoplefeed-textcontent">
  <img src={Quote} alt="image" />
  <div className="rating-star">
    <i className="fa-solid fa-star" style={{color: '#ff7b54',}}></i>
    <i className="fa-solid fa-star" style={{color: '#ff7b54',}}></i>
    <i className="fa-solid fa-star" style={{color: '#ff7b54',}}></i>
    <i className="fa-solid fa-star" style={{color: '#ff7b54',}}></i>
    <i className="fa-solid fa-star" style={{color: '#ff7b54',}}></i>

    </div>
<p className='peopletalk-header3'>PEOPLE ARE TALKING</p>

<p className='peopletalk-des'>
"The shipping is always fast and the customer service team is friendly and helpful. I highly recommend this site to anyone looking for affordable clothing."
</p>

<p className='ptag1'><span>Robert smith</span>
<br/>Purchase item : Boxy T-shirt</p>

</div>
<div className="peoplefeed-imgcontent">

<img src={peoplefeedimage1} alt="" className="peoplefeedimage1" />
<img src={peoplefeedimage2} alt="" className="peoplefeedimage2" />

</div>

</div>

</div>



  </>
}

export default PeopleFeed
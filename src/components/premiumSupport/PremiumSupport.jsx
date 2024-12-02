import React from 'react'
import '../premiumSupport/PremiumSupport.css'

function PremiumSupport() {
  return<>
  
  <div className="premium-container">
<div className="permium-subcontainer">

<div className="premium-cards">
<i className="fa fa-truck"></i>
  <p className='premium-header2'>Free Shipping</p>
  <p className='premium-des'>Free shipping over order $120</p>
</div>

<div className="premium-cards">
<i className="fa fa-credit-card fs-22"></i>

<p className='premium-header2'>Flexible Payment</p>
<p className='premium-des'>Pay with Multiple Credit Cards</p>
</div>

<div className="premium-cards">
<i className="fa fa-undo fs-22"></i>

<p className='premium-header2'>14 Day Returns</p>
<p className='premium-des'>Within 30 days for an exchange</p>
</div>

<div className="premium-cards">
<i className="fa fa-life-ring"></i>

<p className='premium-header2'>Premium Support</p>
<p className='premium-des'>Outstanding premium support</p>

</div>

</div>


  </div>
  
  </>
}

export default PremiumSupport
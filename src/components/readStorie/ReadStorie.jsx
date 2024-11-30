import React from 'react'
import ReadStory from '../readStorie/Readstory-pics/collection-58.jpg'
import '../readStorie/ReadStorie.css'

function ReadStorie() {
  return<>
  <div className="readstory-container">

<div className="readstory-content">

<img src={ReadStory} />
<div className="text-content">
<p className='header'>Redefining Fashion
Excellence</p>
<p>Here is your chance to upgrade your wardrobe with a variation of styles</p>
<button>Read out stories</button>

</div>

</div>

  </div>
  </>
}

export default ReadStorie
import React from 'react'
import bread from '../assets/Bread & bakery.webp';
import fish from '../assets/fish & meat.webp';
import fresh from '../assets/fresh & natural.webp';
import styles from './PartsStyle/CategoryPart.moudle.css'

function CategoryPart() {
  return (
    <div className="sec1">
    <div>
     <img className="pic1"src={bread}  alt=''  /> 
    </div>
    <div>
    <img className="pic2" src={fish}  alt=''  />
    </div>
    <div>
    <img className="pic3" src={fresh}  alt=''  />
    </div>
  </div>
  )
}

export default CategoryPart

import React from 'react'
import '../AppSection/AppSection.css'
import { ReactComponent as Goggle } from "../../assets/WGoggle.svg";
import { ReactComponent as PlayStore } from "../../assets/Wplaystore.svg";
import Wtrolley from '../../assets/W trolley.webp'
import womanapp from '../../assets/woman app.webp'


function AppSection() {
  return (
      <div className='AppSection Py5'>
        <div>
        <img className='appstore-img fir-img' src={ Wtrolley}  alt='picture'  />
        </div>
        <div className='app-content'>
          <div className='app-text'>
          <h1>Get Your Daily Needs From Your Reliable Cypher Store</h1>
          <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
          </div>
          <div className='image-container'>
          <Goggle className='svg-item'/>
          <PlayStore className='svg-item'/>
          </div>
        </div>
        <div>
        <img className='appstore-img sec-img' src={womanapp}  alt=''  />
        </div>
      </div>
  )
}

export default AppSection

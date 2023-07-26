import React from 'react'
import '../AppSection/AppSection.css'
import { ReactComponent as Goggle } from "../../assets/WGoggle.svg";
import { ReactComponent as PlayStore } from "../../assets/Wplaystore.svg";
import { ReactComponent as Car } from "../../assets/car.svg";
import { ReactComponent as PayStack } from "../../assets/pay-stark.svg";
import { ReactComponent as Gift} from "../../assets/gift.svg";
import { ReactComponent as Call} from "../../assets/call.svg";
import Wtrolley from '../../assets/W trolley.webp'
import womanapp from '../../assets/woman app.webp'


function AppSection() {
  return (
    <>
      <section className='AppSection Py5'>
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
      </section>

       <section className='contacte-container'>
          <div className='cover-info'>
              <Car className='cover-img'/>
              <p className='cover-text'>Free Shipping From $500.00</p>
          </div>
          <div className='cover-info'>
              <Call  className='cover-img'/>
              <p className='cover-text'>Support 24/7 At Anytime</p>
          </div>
          <div className='cover-info'>
          <PayStack  className='cover-img'/>
          <p className='cover-text'>Secure Payment Totally Safe</p>
          </div>
          <div className='cover-info'>
            <Gift className='cover-img'/>
            <p className='cover-text'>Latest Offer Upto 20% Off</p>
          </div>
        </section> <hr></hr>

        <section>
          
        </section>
      </>
  )
}

export default AppSection

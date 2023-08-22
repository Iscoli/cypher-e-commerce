import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Basket1 from "../assets/E8.jpg";
import Basket2 from "../assets/E7.jpg";
import Basket3 from "../assets/E6.webp";
import Basket4 from "../assets/E9.jpg";
import Basket5 from "../assets/E10.png";
import "./PartsStyle/Swipper.css";
import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Swipper() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="mySwipper-container">
          <SwiperSlide>
            <img className="swipper-img" src={Basket1} alt="Basket one" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swipper-img" src={Basket2} alt="Basket two" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swipper-img" src={Basket3} alt="Basket three" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swipper-img" src={Basket4} alt="Basket four" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swipper-img" src={Basket5} alt="Basket five" />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="main-swipper-flex1">
        <div className="swipper-flex1">
          <h3>
            <span>100% Natural Quality </span>Organic Product
          </h3>
          <p>
            See Our latest discounted products from here and get a special
            <span> discount product</span>
          </p>
        </div>
        <div className="swipper-flex2">
          <Link to="/">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Swipper;

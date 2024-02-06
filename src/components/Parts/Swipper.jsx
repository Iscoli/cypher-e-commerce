// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Basket1 from "../assets/bg-image/bg1.webp";
import Basket2 from "../assets/bg-image/bg2.jpg";
import Basket3 from "../assets/bg-image/bg3.webp";
import Basket4 from "../assets/bg-image/bg4.jpg";
import Basket5 from "../assets/bg-image/bg5.jpg";
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
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className="swipper-imgs"
              src={Basket1}
              alt="Basket one"
            />
            <div className="sliderText">
              <h2>Quality Freshness Guaranteed</h2>
              <p>
                Intrinsically fashion performance based products rather than
                accurate benefits
              </p>
              <Link to="/main-category/fish-meat">
                <button className="btn1">Shop Now</button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className="swipper-imgs"
              src={Basket2}
              alt="Basket two"
            />
            <div className="sliderText">
              <h2>Quality Freshness Guaranteed</h2>
              <p>
                Intrinsically fashion performance based products rather than
                accurate benefits
              </p>
              <Link to="/main-category/snacks-instant">
                <button className="btn1">Shop Now</button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className="swipper-imgs"
              src={Basket3}
              alt="Basket three"
            />
            <div className="sliderText">
              <h2>Quality Freshness Guaranteed</h2>
              <p>
                Intrinsically fashion performance based products rather than
                accurate benefits
              </p>
              <Link to="/main-category/household-tools">
                <button className="btn1">Shop Now</button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className="swipper-imgs"
              src={Basket4}
              alt="Basket four"
            />
            <div className="sliderText">
              <h2>Quality Freshness Guaranteed</h2>
              <p>
                Intrinsically fashion performance based products rather than
                accurate benefits
              </p>
              <Link to="/main-category/fruits-vegetable">
                <button className="btn1">Shop Now</button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ position: "relative" }}>
            <img
              loading="lazy"
              className="swipper-imgs"
              src={Basket5}
              alt="Basket five"
            />
            <div className="sliderText">
              <h2>Quality Freshness Guaranteed</h2>
              <p>
                Intrinsically fashion performance based products rather than
                accurate benefits
              </p>
              <Link to="/main-category/breakfast">
                <button className="btn1">Shop Now</button>
              </Link>
            </div>
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
          <Link to="/main-category/fruits-vegetable">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Swipper;

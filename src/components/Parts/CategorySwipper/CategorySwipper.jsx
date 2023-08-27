import { useEffect, useState } from "react";
import { fetchCategory } from "../../../Redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './CategorySwipper.css';
import { Link } from "react-router-dom";
import CategorySwipBox from "../../Useables/CategorySwipper/CategorySwipBox";
import { useSelector, useDispatch } from "react-redux";

const CategorySwipper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  console.log("hello wolr");
  const data = useSelector((state) => state.categories);

  const categories = Object.values(data.categories);

  return (
    <div className="" style={{ margin: "25px" }}>
      {
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={12}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          breakpoints={{
            374: {
              slidesPerView: 2,
              
            },
            460: {
              slidesPerView: 3.25,
            },
            576: {
              slidesPerView: 3.75,
            },
            668: {
              slidesPerView: 4.5,
            },
            768: {
              slidesPerView: 5.25,
            },
            880: {
              slidesPerView: 5.8,
            },
            992: {
              slidesPerView: 6.5,
            },
            1096: {
              slidesPerView: 7.35,
            },
            1200: {
              slidesPerView: 8.25,
            },
          }}
        >
          {categories.map(({ Name, img }, index) => {
            return (
             
              <SwiperSlide key={index} className="swiper-slide-centered">
                 <Link
              className="link-tag link custom-link"
              to={`/main-category/${Name}`}
            >
                  <div className="swip-img">
                <img src={img} />
                 </div>
                <p style={{fontSize:'0.84rem'}}>{Name}</p>
                </Link>
              </SwiperSlide>
             
            );
          })}
            <div className="swiper-button-prev"></div>
           <div className="swiper-button-next"></div>
           
        </Swiper>
      }
    </div>
  );
};

export default CategorySwipper;

// {slides.map((slide, index) => {
//   return (
//     <SwiperSlide key={index}>
//       <div>{slide}</div>
//       <CategorySwipBox categories={categories} data={data} />
//     </SwiperSlide>
//   );
// })}

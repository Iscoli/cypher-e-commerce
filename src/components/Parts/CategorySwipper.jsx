import { useEffect,useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const CategorySwipper = () => {
  const [subcategories, setSubCategories] = useState([]) 
  const navigate = useNavigate();
  const slides = [
        'Slide 1',
        'Slide 2',
        'Slide 3',
        'Slide 4',
        'Slide 5',
        'Slide 6',
        'Slide 7',
        'Slide 8',
        'Slide 9',
        'Slide 10',
        'Slide 11',
        'Slide 12',
        'Slide 13',
        'Slide 14',
        'Slide 15',
        'Slide 16',
        'Slide 17',
        'Slide 18',
        'Slide 19',
        // Add more slides as needed
      ];

    
      
  
 
  useEffect(()=>{
    
    const getSubCategories = async()=>{
       
     
      try {
        const {data} = await axios.get('/SubCategory.json')
        const category=Object.entries(data)
        
       
        setSubCategories(category)
        
        // [`${props.param}`]
   }
   catch (error){
     console.log('an eroo occured')
   }
    }
    getSubCategories()

},[])
console.log(subcategories)
  return (
    <div className=""
    style={{margin:'25px'}}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
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
        {
          slides.map((slide,index)=>{
            return (
              <SwiperSlide key={index}>
                <div>{slide}</div>
                 
              </SwiperSlide>
            )
          })
        }
      
        
      </Swiper>
    </div>
  );
};

export default CategorySwipper;


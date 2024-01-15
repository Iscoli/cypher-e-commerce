import { useEffect } from "react";
import Swipper from "../components/Parts/Swipper";
import "./PagesStyle/Home.css";
import FeaturedCategories from "../components/Parts/FeaturedCategories";
import { fetchCategory } from "../Redux";
import CategoryItem from "../components/Useables/CategoryItem";
import PopularItem from "../components/Useables/PopularItem";
import { useSelector, useDispatch } from "react-redux";
import DeliveryBox from '../components/Parts/DeliveryBox/DeliveryBox';




function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    // eslint-disable-next-line
  }, []);
  const data = useSelector((state) => state.categories);

  const categories = Object.values(data.categories);

  return (
    <div>
      <div className="main-home">
        <div className="section-1">
          <Swipper />
        </div>
         
        <div className="section-2">
          <div className="part1">
            <FeaturedCategories />
          </div>
          <div className="main-category">
            <CategoryItem categories={categories} data={data} />
          </div>
          <div className="section-3">
            <PopularItem />
          </div>

          <div style={{width:'95%', margin:'35px auto'}} className="div">
            <DeliveryBox/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

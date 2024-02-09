import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./PagesStyle/ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import IconLink from "../components/Useables/IconLink/IconLink";
import { fetchCartData } from "../Redux";
import { useDispatch } from "react-redux";
import Description from "../components/Useables/Description/Description";
import { ReactComponent as Plus } from "../components/assets/plus.svg";
import { ReactComponent as Minus } from "../components/assets/minus.svg";
import car from "../components/assets/moto.svg";
import house from "../components/assets/house.svg";
import dollar from "../components/assets/dollar.svg";
import arrow from "../components/assets/doublearrow.svg";
import location from "../components/assets/location.svg";
import warranty from "../components/assets/warranty.svg";
import light from "../components/assets/wutan.svg";
import RelatedProduct from "../components/Useables/RelatedProduct/RelatedProduct";

function ProductDetails() {
  const param = useParams();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [count, setCount] = useState(0);

  const { name, imgUrl, maincategory, price, stock, subcategory } =
    categories;

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
  const numOfItemsPurchased = count;
  const handleAdd = ({ id, count, imgUrl, price, name, discount }) => {

   
    if (numOfItemsPurchased > 0) {
      const discountValue = discount || 0;
      dispatch(
        fetchCartData(
          { id, count, imgUrl, price, name, discountValue },
          numOfItemsPurchased
        )
      );
      setCount(0);
    }
   
  };

  // console.log(categories, "categgew");

  useEffect(() => {
    const getMainCategories = async () => {
      try {
        const { data } = await axios.get("/MainCategoryBackupPretty.json");

        // for the product name
        const datu = Object.values(data[0]);
        

        datu.forEach((item) => {
          if (item && item[param.name]) {
            // console.log(item[param.name]);

            setCategories(item[param.name]);
          }
        });
      } catch (error) {
        console.log("an eroo occured");
      }
    };
    getMainCategories();
  }, [param.name]);

  return (
    <div className={styles.product}>
      <nav className={styles.navItem}>
        <Link to="/">
          <span>home</span>
        </Link>
        <span>
          <FontAwesomeIcon className="category-pionter" icon={faAngleRight} />
        </span>

        <Link to={`/main-category/${maincategory}`}>
          {console.log(maincategory, "ppp")}
          <span>{maincategory}</span>
        </Link>
        <span>
          <FontAwesomeIcon className="category-pionter" icon={faAngleRight} />
        </span>
        <span style={{ color: "#6c757d" }} className={styles.navItem2}>
          {name}
        </span>
      </nav>

      <section className={styles.section1}>
        <div className={styles.flex1}>
          <img src={imgUrl} alt="prod-img" />
        </div>

        <div className={styles.flex2}>
          <div className={styles.flex11}>
            <h2 style={{ marginBottom: "-9px" }}>{name}</h2>
            <h2 style={{ marginBottom: "8px" }}>${price}</h2>
            {stock > 0 ? (
              <span className={styles.stockIn}>In Stock </span>
            ) : (
              <span className={styles.stockOut}>Stock Out </span>
            )}
            {/* {console.log(subcategory, "iiiss")} */}
            <Description subcategory={subcategory} />
            <div className={styles.calContainer}>
              <div className={styles.cal1}>
                <button
                  disabled={stock === 0}
                  onClick={() => handlePlus()}
                  style={{ cursor: "pointer" }}
                >
                 <Plus/>
                </button>
                <span>{count}</span>
                <button
                  style={{ cursor: "pointer" }}
                  disabled={stock === 0}
                  onClick={() => handleMinus()}
                >
                  <Minus/>
                </button>
              </div>
              <div className={styles.cal2}>
                <button
                  className={styles.btnn2}
                  disabled={stock === 0}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAdd(categories)}
                >
                  Add Cart
                </button>
              </div>
            </div>
            <p>
              <span
              style={{color:'#374151'}}
              >Category:</span>
             <span
             style={{color: '#6b7280',
                fontWeight:500}}
             >{subcategory} </span>
            </p>
            <span className={styles.bottom1}>{name}</span>
            <span className={styles.bottom2}>{maincategory}</span>
          </div>

          <div className={styles.flex12}>
            <IconLink
              icon={car}
              text="Free shipping apply to all orders over shipping ₦5000"
            />
            <IconLink icon={house} text="Door Delivery within 72 Hour" />

            <IconLink icon={dollar} text="Cash on Delivery Available" />

            <IconLink
              icon={arrow}
              text="14 Days returns money back guarantee"
            />

            <IconLink icon={warranty} text="Warranty not available this item" />

            <IconLink
              icon={light}
              text="Guaranteed 100% organic from natural products."
            />

            <IconLink
              icon={location}
              text="Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA, United States 96522."
            />
          </div>
        </div>
      </section>

      <section
      style={{width:'101%', margin:'0 auto'}}
      >
        <p
        style={{paddingLeft:'20px'}}
        >Related Product</p>
        {console.log(maincategory, "iiiss")}
        <RelatedProduct maincategory={maincategory} />
      </section>
    </div>
  );
}

export default ProductDetails;

import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategoryPart from "../components/Parts/CategoryPart";
import CategorySwipper from "../components/Parts/CategorySwipper/CategorySwipper";
import result from  '../components/assets/ba-sakamako.svg';
import styles from './PagesStyle/SearchPage.module.css';

function SearchPage() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    console.log(query,'ooeo'); 
  }, [query]);


  return <div 
  style={{ marginTop: "90px" }}
  className="">
      <section>
        <CategoryPart/>
      </section>

      <section
      className={styles.swipper}
      >
        <CategorySwipper/>
      </section>

      <section className={styles.sec3}>
        <div className={styles.imgDiv}>
          <img 
          className={styles.result}
           src={result}
          />
        </div>
        <p
        style={{textAlign:"center"}}
        >Sorry, we cannot find this product 😞</p>
      </section>
  </div>;
}

export default SearchPage;

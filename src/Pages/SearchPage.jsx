import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategoryPart from "../components/Parts/CategoryPart";
import CategorySwipper from "../components/Parts/CategorySwipper/CategorySwipper";
import result from "../components/assets/ba-sakamako.svg";
import styles from "./PagesStyle/SearchPage.module.css";

function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  useEffect(() => {
    console.log(query, "ooeo");
  }, [query]);

  return (
    <div style={{ marginTop: "90px" }}>
      <section>
        <CategoryPart />
      </section>

      <div className={styles.cont}>
        <section>
          <CategorySwipper />
        </section>

        <section className={styles.secn3}>
          {" "}
          {/* Use CSS module class */}
          <div className={styles.resultDiv}>
            {" "}
            {/* Use CSS module class */}
            <img className={styles.resultImg} src={result} />
          </div>
          <p style={{ textAlign: "center" }}>
            Sorry, we cannot find this product 😞
          </p>
        </section>
      </div>
    </div>
  );
}

export default SearchPage;

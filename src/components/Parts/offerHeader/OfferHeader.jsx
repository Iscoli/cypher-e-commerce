import React from "react";
import styles from "./offerHeader.module.css";

function offerHeader({ title }) {
  return (
    <div className={styles.mainContainer}>
      <div
        style={{ fontSize: "1.8rem" }}
        className={`${styles.siginBg} ${styles.sharedPagesDiv}`}
      >
        <h5>{title}</h5>
      </div>
    </div>
  );
}

export default offerHeader;

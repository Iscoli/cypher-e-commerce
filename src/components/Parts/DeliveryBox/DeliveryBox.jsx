import React from "react";
import styles from "./DeliveryBox.module.css";
import bick from '../../assets/bick.webp'

function DeliveryBox() {
  return (
    <div className={styles.DeliveryContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.flex1}>
        <p 
         className={styles.organic}
        style={{textAlign:'left'}}>Organic Products and Food</p>
        <h3 style={{textAlign:'left'}}> Quick Delivery to <span> Your Home</span></h3>
        <p style={{textAlign:'left'}}>
          There are many products you will find our
          shop, Choose your daily necessary product from our KachaBazar shop and
          get some special offer. See Our latest discounted products from here
          and get a special discount.
        </p>
        <button className={styles.btn}>Download App</button>
        </div>
        <div className={styles.flex2}>
          <img src={bick} alt="bick" />
        </div>
      </div>
    </div>
  );
}

export default DeliveryBox;

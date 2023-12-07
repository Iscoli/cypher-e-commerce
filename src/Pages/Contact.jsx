import React from "react";
import OfferHeader from "../components/Parts/offerHeader/OfferHeader";
import styles from "./PagesStyle/contact.module.css";

function Contact() {
  const title = "Contact Us";
  return (
    <div>
      <OfferHeader title={title} />
      <section>
        <div className={styles.boxDiv}>
          <h4>Email Us </h4>
          <p>
            codedshegzy@gmail.com Interactively grow empowered for
            process-centric total linkage.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;

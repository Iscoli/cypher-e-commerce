import React from "react";
import styles from "./PagesStyle/about.module.css";
import OfferHeader from "../components/Parts/offerHeader/OfferHeader";

function About() {
  const title = "About";
  return (
    <div>
      <OfferHeader title={title} />
      <div style={{ padding: "1.5rem" }}>
        <section className={`${styles.flex} ${styles.sec1}`}>
          <div className={styles.flex1}>
            <h3> Welcome to our Store</h3>
            <p>
              Holisticly seize parallel metrics and functional ROI. Seamlessly
              revolutionize error-free internal or "organic" sources before
              effective scenarios. Progressively incentivize state of the art
              applications for efficient intellectual capital.
            </p>

            <p>
              Dynamically embrace diverse customer service and installed base
              paradigms. Credibly seize enterprise-wide experiences for
              end-to-end data. Professionally brand flexible alignments and cost
              effective architectures. Enthusiastically incentivize seamless
              communities with seamlessly facilitate revolutionary metrics with
              strategic theme areas.
            </p>
            <div className={styles.flex4}>
              <div className={styles.aboutInfo}>
                <h3>8K</h3>
                <h5>Lovely Customer</h5>
                <p>
                  Competently productize virtual models without performance.
                </p>
              </div>

              <div className={styles.aboutInfo}>
                <h3>8K</h3>
                <h5>Lovely Customer</h5>
                <p>
                  Competently productize virtual models without performance.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flex2}>
            <img
              className={styles.abtImage}
              src="https://cypher-grocery-store.vercel.app/static/media/ab-us-1.71b1a59d7106b1458f26.webp"
              alt=""
            />
          </div>
        </section>
        <div>
          <p>
            Holisticly seize parallel metrics and functional ROI. Seamlessly
            revolutionize error-free internal or "organic" sources before
            effective scenarios. Progressively incentivize state of the art
            applications for efficient intellectual capital. Credibly leverage
            existing distinctive mindshare through cutting-edge schemas.
            Proactively procrastinate team building paradigms coordinate
            client-centric total transparent internal.
          </p>
          <p>
            Appropriately visualize market-driven data before one-to-one
            scenarios. Collaboratively productize multifunctional ROI through
            intuitive supply chains. Enthusiastically seize revolutionary value
            and process-centric services. Competently harness intuitive
            information after interoperable markets. Interactively revolutionize
            future-proof value before granular sources. Dynamically embrace
            diverse customer service and installed base paradigms. Credibly
            seize enterprise-wide experiences for end-to-end data.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

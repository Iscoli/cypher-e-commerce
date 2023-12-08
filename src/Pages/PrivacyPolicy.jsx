import React from "react";
import OfferHeader from "../components/Parts/offerHeader/OfferHeader";
import styles from "./PagesStyle/privacy.module.css";

function PrivacyPolicy() {
  const title = "Privacy Policies";
  return (
    <div>
      <OfferHeader title={title} />
      <section className={styles.mainContainer}>
        <div className={styles.textDiv}>
          <h3>Last updated: February 15, 2022</h3>
          <p>
            At Cypher Store, accessible from cypher-grocery-store.vercel.app,
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by KachaBazar and how we use it. If you have
            additional questions or require more information about our Privacy
            Policy, do not hesitate to contact us. We may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number. This policy is not applicable
            to any information collected offline or via channels other than this
            website. Our Privacy Policy was created with the help of the Free
            Privacy Policy Generator.
          </p>
        </div>
        <div className={styles.textDiv}>
          <h2>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>
        </div>
        <div className={styles.textDiv}>
          <h2>Information we collect</h2>
          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. Please
            note that the Company will not ask you to share any sensitive data
            or information via email or telephone. If you receive any such
            request by email or telephone, please do not respond/divulge any
            sensitive data or information.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h2>How we use your information</h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>

          <ul>
           <li>Provide, operate, and maintain our website, to provide you with
            updates and other information.</li> 
            <li>
              Improve, personalize, and expand our website,and other information
              relating to the website.
            </li>
            <li>
              Understand and analyze how you use our website, to provide you
              with updates and other information relating to the website.
            </li>
            <li>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates.
            </li>
          </ul>
        </div>

        <div className={styles.textDiv}>
          <h3>Advertising Partners & Third Party Policies</h3>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of KachaBazar. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on KachaBazar, which are sent directly to users' browser.
            Note that KachaBazar has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h3>CCPA Privacy Rights</h3>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to: Request that a business that collects a consumer's
            personal data disclose the categories and specific pieces of
            personal data that a business has collected about consumers. Request
            that a business delete any personal data about the consumer that a
            business has collected.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h3>Children's Information</h3>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. Cypher Store does not knowingly collect any
            Personal Identifiable Information from children under the age of 13.
            We encourage parents and guardians to observe, participate in,
            and/or monitor and guide their online activity.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;

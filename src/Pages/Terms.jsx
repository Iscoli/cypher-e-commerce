import OfferHeader from "../components/Parts/offerHeader/OfferHeader";
import styles from "./PagesStyle/terms.module.css";
import { Link } from "react-router-dom";

function Terms() {
  const title = "Terms & Condition";
  return (
    <div>
      <OfferHeader title={title} />
      <section className={styles.mainContainer}>
        <div className={styles.textDiv}>
          <h3> Welcome to KachaBazar!</h3>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Cypher Store's Website, located at
            https://cypher-grocery-store.vercel.app/. By accessing this website
            we assume you accept these terms and conditions. Do not continue to
            use KachaBazar if you do not agree to take all of the terms and
            conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company's terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4> Cookies</h4>
          <p>
            We employ the use of cookies. By accessing KachaBazar, you agreed to
            use cookies in agreement with the KachaBazar's Privacy Policy.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4>License</h4>
          <p>
            Unless otherwise stated, KachaBazar and/or its licensors own the
            intellectual property rights for all material on KachaBazar. All
            intellectual property rights are reserved. You may access this from
            KachaBazar for your own personal use subjected to restrictions set
            in these terms and conditions.This Agreement shall begin on the date
            hereof.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4> License</h4>
          <p>
            Unless otherwise stated, KachaBazar and/or its licensors own the
            intellectual property rights for all material on KachaBazar. All
            intellectual property rights are reserved. You may access this from
            KachaBazar for your own personal use subjected to restrictions set
            in these terms and conditions.This Agreement shall begin on the date
            hereof.
          </p>

          <h4>You must not:</h4>
          <ul>
            <li>
              Identifiers (e.g. name, mailing address, email address, phone
              number, credit/debit card number)
            </li>
            <li>
              Characteristics of protected classifications (e.g. gender, age)
            </li>
            <li>
              Internet or other electronic network activity (e.g. browse or
              search history)
            </li>
          </ul>
          <p>
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            KachaBazar does not filter, edit, publish or review Comments prior
            to their presence on the website. Comments do not reflect the views
            and opinions of KachaBazar,its agents and/or affiliates.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4> Content Liability</h4>
          <p>
            We shall not be held responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4>Your Privacy</h4>
          <p>
            Please read <Link 
            className={styles.privacy}
            to="/privacy">Privacy Policy</Link>
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4>Reservation of Rights</h4>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it's linking policy at any time.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4>Removal of links from our website</h4>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
        </div>

        <div className={styles.textDiv}>
          <h4>Disclaimer</h4>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
            <ul>
              <li>
                {" "}
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                {" "}
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                {" "}
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Terms;

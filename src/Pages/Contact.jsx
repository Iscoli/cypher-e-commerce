import React, { useState } from "react";
import OfferHeader from "../components/Parts/offerHeader/OfferHeader";
import { toast } from "react-toastify";
import styles from "./PagesStyle/contact.module.css";
import calle from "./pictures/call.svg";
import emaile from "./pictures/email.svg";
import locatione from "./pictures/location.svg";
import contact from "./pictures/contact-us.webp";

function Contact() {
  const title = "Contact Us";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const onchange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SubmitHandle = (e) => {
    e.preventDefault();
    console.log(name, "suna");
    console.log(email, "email");
    console.log(message, "message");
    if (name === "") {
      toast.error("name is field empty");
      return;
    }
    if (email === "") {
      toast.error("email is field empty");
      return;
    }
    if (message === "") {
      toast.error("message is field empty");
      return;
    } else {
      toast.success("your message has been sent");
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 4000);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <OfferHeader title={title} />
      <section className={styles.sec1}>
        <div className={styles.myContainer}>
          <div className={styles.boxDiv}>
            <img src={emaile} alt="email" />
            <h4>Email Us </h4>
            <p>
              codedshegzy@gmail.com Interactively grow empowered for
              process-centric total linkage.
            </p>
          </div>
          <div className={styles.boxDiv}>
            <img src={calle} alt="kira" />
            <h4>Call Us </h4>
            <p>
              029-00124667 Distinctively disseminate focused solutions
              clicks-and-mortar ministate.
            </p>
          </div>
          <div className={styles.boxDiv}>
            <img src={locatione} alt="location" />
            <h4>Location</h4>
            <p>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
          </div>
        </div>
      </section>

      <section className={styles.sec2}>
        <div className={styles.flex1}>
          <img
            className={styles.contactImg}
            style={{ width: "100%" }}
            src={contact}
            alt="contact"
          />
        </div>

        <div className={styles.flex2}>
          <h2>For any support just send your query</h2>
          <p>
            Collaboratively promote client-focused convergence vis-a-vis
            customer directed alignments via plagiarize strategic users and
            standardized infrastructures.
          </p>
          <form onSubmit={SubmitHandle} className={styles.form}>
            <div className={styles.mainDiv}>
            <div className={styles.div1}>
              <label>Your Name</label>
              <br></br>
              <input
                type="name"
                name="name"
                value={name}
                onChange={onchange}
                placeholder="enter your Name"
              />
            </div>

            <div className={styles.div2}>
              <label>Your Email </label>
              <br></br>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onchange}
                placeholder="enter your email"
              />
            </div>
            </div>
            <div className={styles.div3}>
              <label>Your Message</label>
              <br></br>
              <textarea
                value={message}
                name="message"
                onChange={onchange}
                placeholder="Write message"
                cols="30"
                rows="5"
              />
            </div>

            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              {loading ? (
                <button disabled>Sending...</button>
              ) : (
                <button>Send Message</button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

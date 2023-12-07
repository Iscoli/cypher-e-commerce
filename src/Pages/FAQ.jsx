// FAQ.js
import React from 'react';
import OfferHeader from '../components/Parts/offerHeader/OfferHeader';
import Tambaya from './pictures/tambaya.svg';
import ControlledAccordions from '../components/Parts/Accordion/Accordion';
import styles from './PagesStyle/Faq.module.css';

function FAQ() {
  const title = 'Frequently Asked Questions';

  return (
    <div>
      <OfferHeader title={title} />

      <section className={styles.faqContainer}>

        <div className={styles.flex1} style={{ width: '90%', margin:'10px auto'}}>
        <img style={{ width: '100%' }} src={Tambaya} alt='question' />
        </div>

        <div className={styles.flex1} style={{ width: '90%', margin:'50px auto'}}>
          <ControlledAccordions/>
         
        </div>
      </section>
    </div>
  );
}

export default FAQ;

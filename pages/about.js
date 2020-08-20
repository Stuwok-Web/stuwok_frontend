import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <Layout>
      <section>
        <div className={styles.body_image}>
          <div className="container">
            <div className={styles.body_image_text}>
              <h1>
                Hire <span className={styles.students}>Students</span> for your
                company
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.finding_young_talent}>
            <h2>Finding young talent has never been easier</h2>
            <hr className={styles.finding_talent_hr} />

            <p className={styles.section_text}>
              Choose us to post your job online and benefit from the tailored
              services we offer. Our focus is on connecting students to your
              business quickly and effectively. Are you interested in publishing
              apprenticeships for your growing company? Or do you need to hire
              employees fast for an upcoming weekend shift? Post a vacancy today
              and receive applications straight to your inbox. Are you a new
              customer? Take advantage of our free job advertising offer today
              and contact us on info@stuwok.com to find out the best way to
              advertise your job.
            </p>
            <button className="buttons btn btn-primary mt-2">
              Place Vacancy
            </button>
            <button className="buttons btn btn-outline-primary mt-2">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className={styles.company_names}>
          <marquee behavior="scroll" direction="left">
            <div class={styles.logo}>
              <img
                src="https://stuwork.netlify.app/assets/Trusted%20By%20Top%20Companies.png"
                alt="companies"
              />
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1597840631/chatdesk_pbz3bl.svg"
                alt="chatdesk"
              />
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1597840631/flutterwave_wqpfum.svg"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1597840632/piggyvest_nyiwd6.svg"
                alt="piggyvest"
              />
              <img
                src="https://stuwork.netlify.app/assets/Vector%20(5).png"
                alt="hotel.ng"
              />
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1597840631/verifi_ki0pjw.svg"
                alt="verifi"
              />
              <img src="https://stuwork.netlify.app/assets/Vector%20(4).png" />
            </div>
          </marquee>
        </section>
        <section class="container">
      <div class={styles.whychoose_us_section}>
         <div class="row">
            <div class="col-md-6 ">
                <div className={styles.why_choose_us}>

               <img src="https://res.cloudinary.com/davak/image/upload/v1597945545/Frame_gvjwbt.png" alt="why-choose-us-img"/>
                </div>
            </div>
            <div class="col-md-6">
                <div className={styles.why_choose_us_text}>
               <p>Why choose us for student Recruitment?</p>
               <ul>
                  <li><span><div className={styles.square}></div></span> Quick and easy - post your vacancy in 5 minutes.</li>
                  <li><span><div className={styles.square}></div></span>Tailored professional advice to increase applications.</li>
                  <li><span><div className={styles.square}></div></span>Flexible pricing plans to suit your requirements.</li>
                  <li><span><div className={styles.square}></div></span>Search from over 1 million candidates.</li>
                  <li><span><div className={styles.square}></div></span>Tailored professional advice to increase applications.</li>
               </ul>
            </div>
            </div>
         </div>
      </div>
   </section>

    </Layout>
  );
};

export default about;

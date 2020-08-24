import React from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import Layout from '../components/Layout';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <section className={styles.heading_top}>
              <div className="container d-flex">
              <div className={styles.body_image_text}>
                  <h1>
                    Contact <span className={styles.students}>Us</span>
                  </h1>
                </div>
              </div>
          </section>
        <section className={styles.first_section}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>Write Us</h3>
                <p className={styles.block}></p>
                <p className={styles.write_us_text}>
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei.
                </p>
                <div className={styles.Write_us_form}>
                  <form className="form">
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control Appointment-input"
                        id=""
                        placeholder="Your name"
                        style={{
                          margin: ' 1rem 0 !important',
                          padding: '25px 20px',
                          borderRadius: 'unset !important',
                          background: 'white',
                        }}
                      />
                      <input
                        type="email"
                        className="form-control Appointment-input"
                        id=""
                        placeholder="Your email"
                        style={{
                          margin: ' 1rem 0 !important',
                          padding: '25px 20px',
                          borderRadius: 'unset !important',
                          background: 'white',
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Enter Message"
                        style={{
                          height: '10rem !important',
                          resize: 'unset !important',
                        }}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn buttons btn-primary">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <h3>Offices</h3>
                <p className={styles.block}></p>
                <p className={styles.offices_text}>
                  <i className="fa fa-location"></i> Alienum phaedrum torquatos
                  nec eu, vis detraxit periculis ex, nihil expetendis in mei.
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                  nihil expetendis in mei. Mei an pericula euripidis, hinc
                  partem ei est. Eos ei nisl graecis, vix aperiri consequat an.
                  Eius lorem tincidunt vix at, vel pertinax sensibus id.{' '}
                </p>
                <div className={styles.address_section}>
                  <h3>Address</h3>
                  <p className={styles.address_text}>
                    No 130 muri okunola street, victoria Island Lagos state,
                    Nigeria
                  </p>
                </div>
                <h3>Phone</h3>
                <p>+234 (0) 70 612 3456</p>
                <p>+234 (0) 70 612 3456</p>
                <p>+234 (0) 70 612 3456</p>
                <div className="Email">
                  <h3>Email</h3>
                  <p>customer@yourmail.com</p>
                  <p>domainname@yourmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default contact;

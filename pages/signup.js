import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Signup.module.css';

const signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className={styles.sectionbox}>
          <div
            className="container"
            style={{ marginTop: '10rem', marginBottom: '5rem' }}
          >
            <div className={styles.box}>
              <div className="d-flex mb-2 py-4">
                <h2 className="font-weight-bold">Get Started</h2>
              </div>
              <form action="">
                <div className="form-group">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      class={styles.formControlTop}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    class={styles.formControl}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    class={styles.formControlBottom}
                  />
                  <div className="d-flex mt-3">
                    <input
                      className={styles.checkbox}
                      type="checkbox"
                      name=""
                      id=""
                    />{' '}
                    I Agree to StuWork’s Terms and Conditions
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign Up
                </button>
              </form>
              <div className={styles.ayh}>
                <span className="mr-1">Are you hiring?</span>{' '}
                <Link href="/employer">
                  <span style={{ borderBottom: '4px solid #0084F4' }}>
                    Post Jobs
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default signup;

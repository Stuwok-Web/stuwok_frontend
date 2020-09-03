import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/SignIn.module.css';

const signin = () => {
  return (
    <>
      <Head>
        <title>Sign In</title>
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
                <h2 className="font-weight-bold">Welcome Back</h2>
              </div>
              <form action="">
                <div className="form-group">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      class={styles.formControlTop}
                    />
                  </div>

                  <input
                    type="password"
                    placeholder="Password"
                    class={styles.formControlBottom}
                  />
                  <div className="d-flex mt-3">
                    <Link href="#">
                      <span style={{ color: 'blue', cursor:"pointer" }}>
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default signin;

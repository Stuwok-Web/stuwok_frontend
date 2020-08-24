import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div style={{ background: '#f8f8f8' }}>
          <section>
            <div className={styles.body_image}>
              <div className="container d-flex">
                <div className={styles.body_image_text}>
                  <h1>
                    About <span className={styles.students}>Stuwork</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="container">
              <div className={styles.how_it_all_started}>
                <h2>How it all started</h2>
                <hr className={styles.how_it_all_started_hr} />

                <p className={styles.section_text}>
                  Choose us to post your job online and benefit from the
                  tailored services we offer. Our focus is on connecting
                  students to your business quickly and effectively. Are you
                  interested in publishing apprenticeships for your growing
                  company? Or do you need to hire employees fast for an upcoming
                  weekend shift? Post a vacancy today and receive applications
                  straight to your inbox. Are you a new customer? Take advantage
                  of our free job advertising offer today and contact us on
                  info@stuwok.com to find out the best way to advertise your
                  job.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className={styles.second_section}>
                <hr className={styles.how_it_all_started_hr} />

                <div className={styles.ptext}>
                  <p>
                    {' '}
                    We believe in helping students make a difference, and we work
                with like minded people. <br /> Our team is united, and that’s
                what makes us move to the next level. Check out our open
                positions!
                  </p>
                </div>
                <div class="row mt-5">
              <div class="col-md-4">
                
                <h4 className={styles.sty}>
                  <span>Our St</span>ory
                </h4>
                <div className={styles.line}></div>

                <p className={styles.styp}>
                  Arcu ornare posuere id amet in porta etiam interdum.
                  Scelerisque odio molestie penatibus maecenas ullamcorper
                  pharetra malesuada. Nunc convallis enim semper aliquet. Sed
                  scelerisque viverra nec rutrum orci, quisque pharetra mauris.
                </p>
              </div>
             
              <div class="col-md-4">
                <h4 className={styles.sty}>
                  <span> Our Ex</span>pectation
                </h4>
                <div className={styles.line}></div>
                <p className={styles.styp}>
                  Mi venenatis dictumst aliquam, habitant cursus ut nullam
                  faucibus at. Habitant amet sit vitae leo, in sit mauris in a.
                  Sed aliquet at id vestibulum. Sed quis proin et, nulla
                  vulputate eget euismod.
                </p>
              </div>

            
              <div class="col-md-4">
                <h4 className={styles.sty}>
                  <span>Yo</span>u!
                </h4>
                <div className={styles.line}></div>
                <p className={styles.styp}>
                  Arcu ornare posuere id amet in porta etiam interdum.
                  Scelerisque odio molestie penatibus maecenas ullamcorper
                  pharetra malesuada. Nunc convallis enim semper aliquet. Sed
                  scelerisque viverra nec rutrum orci, quisque pharetra mauris.
                </p>
              </div>
            </div>
              </div>
            </div>
          </section>
          <section className={styles.fifthSection}>
          <div className="container mt-5 mb-5">
            <div className="d-flex flex-row justify-content-center mt-5">
              <div className="d-flex flex-column">
                <span className={styles.getHiredText}>
                  Testimonials From our Users
                </span>
                <div className={styles.line}></div>
              </div>
            </div>
            <div class="card-deck mt-5 mb-4">
              <div
                class="card"
                style={{
                  border: 'none',
                  background: '#FFFFFF',
                  boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.25)',
                  borderRadius: '12px',
                }}
              >
                <img
                  src="https://stuwork.netlify.app/assets/turtle-neck.svg"
                  class="card-img-top "
                  alt=""
                />
                <div class="card-body">
                  <h5 class="card-title text-left">Philip Olorunfemi Ofei</h5>
                  <p class="text-left">Product Designer</p>
                  <p class="text-left">300L University Of Lagos </p>
                  <p class="card-text">
                    I am a 300level student from the university of lagos, even
                    tho i started good at what i do, i have not been given an
                    opportunity by companies to showcase my talent and passion,
                    stuwork has proven that you can still work and go to school,
                    their platform has... Read More
                  </p>
                </div>
                <div
                  class="card-footer text-center"
                  style={{
                    background: '#00C48C',
                    borderRadius: '0px 0px 12px 12px',
                  }}
                >
                  <small class={styles.viewp}>View Profile</small>
                </div>
              </div>

              <div
                class="card"
                style={{
                  border: 'none',
                  background: '#FFFFFF',
                  boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.25)',
                  borderRadius: '12px',
                }}
              >
                <img
                  src="https://stuwork.netlify.app/assets/Rectangle%209.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-left">Philip Olorunfemi Ofei</h5>
                  <p class="text-left">Product Designer</p>
                  <p class="text-left">300L University Of Lagos </p>
                  <p class="card-text">
                    I am a 300level student from the university of lagos, even
                    tho i started good at what i do, i have not been given an
                    opportunity by companies to showcase my talent and passion,
                    stuwork has proven that you can still work and go to school,
                    their platform has... Read More
                  </p>
                </div>
                <div
                  class="card-footer text-center"
                  style={{
                    background: '#00C48C',
                    borderRadius: '0px 0px 12px 12px',
                  }}
                >
                  <small class={styles.viewp}>View Profile</small>
                </div>
              </div>

              <div
                class="card"
                style={{
                  border: 'none',
                  background: '#FFFFFF',
                  boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.25)',
                  borderRadius: '12px',
                }}
              >
                <img
                  src="https://stuwork.netlify.app/assets/Rectangle%209%20(1).png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title text-left">Philip Olorunfemi Ofei</h5>
                  <p class="text-left">Product Designer</p>
                  <p class="text-left">300L University Of Lagos </p>
                  <p class="card-text">
                    I am a 300level student from the university of lagos, even
                    tho i started good at what i do, i have not been given an
                    opportunity by companies to showcase my talent and passion,
                    stuwork has proven that you can still work and go to school,
                    their platform has... Read More
                  </p>
                </div>
                <div
                  class="card-footer text-center"
                  style={{
                    background: '#00C48C',
                    borderRadius: '0px 0px 12px 12px',
                  }}
                >
                  <small class={styles.viewp}>View Profile</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </Layout>
    </>
  );
};

export default about;

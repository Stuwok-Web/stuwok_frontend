import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import styles from '../styles/Employer.module.css';

const employer = () => {
  return (
    <>
    <Head>
        <title>Hire Intern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <button className="buttons btn btn-outline-primary mt-2 ml-4">
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
      <div style={{background:"#f8f8f8 "}}>

      <section class="container">
        <div class={styles.whychoose_us_section}>
          <div class="row">
            <div class="col-md-6 ">
              <div className={styles.why_choose_us}>
                <img
                  src="https://res.cloudinary.com/davak/image/upload/v1597945545/Frame_gvjwbt.png"
                  alt="why-choose-us-img"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div className={styles.why_choose_us_text}>
                <p>Why choose us for student Recruitment?</p>
                <ul>
                  <li>
                    <span>
                      <div className={styles.square}></div>
                    </span>{' '}
                    Quick and easy - post your vacancy in 5 minutes.
                  </li>
                  <li>
                    <span>
                      <div className={styles.square}></div>
                    </span>
                    Tailored professional advice to increase applications.
                  </li>
                  <li>
                    <span>
                      <div className={styles.square}></div>
                    </span>
                    Flexible pricing plans to suit your requirements.
                  </li>
                  <li>
                    <span>
                      <div className={styles.square}></div>
                    </span>
                    Search from over 1 million candidates.
                  </li>
                  <li>
                    <span>
                      <div className={styles.square}></div>
                    </span>
                    Tailored professional advice to increase applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class={styles.free_job_img_section}>
          <div class={styles.free_job_img}></div>
          <div class=" container">
            <div className={styles.finding_young_talent}>
              <h2>Try our Free Job Advertizing offer today</h2>

              <hr className={styles.finding_talent_hr} />

              <p class="section-text">
                We get it. Looking for employees can be stressful. It takes up
                your time, effort and most importantly, money. That’s why at
                StudentJob we are offering first-time clients the opportunity to
                post a job advert for free. No obligations. If you take
                advantage of this offer you will still benefit from our tailored
                Account Manager service and assistance every step of the way. If
                you are happy after one month, let's discuss how we can maximise
                your reach and enhance your job posting experience. Otherwise,
                you are free to walk away. Place your job advert for free and
                let us connect students to you.
              </p>
              <button class="buttons btn btn-primary">Place Vacancy</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div
            className="row text-center"
            style={{ justifyContent: 'center', padding: '4.5rem' }}
          >
            {/* col 1 */}
            <div className="col-md-4">
              <div
                className="card mb-4 mt-4 box-shadow"
                style={{ borderTop: '4px solid #00C48C' }}
              >
                <div className="card-header" style={{ background: 'white' }}>
                  <h5 className="my-0 font-weight-normal">Job Listing</h5>
                  <span
                    className="my-0 font-weight-bold"
                    style={{ color: '#2d9cdb' }}
                  >
                    Free
                  </span>
                </div>
                <span>Hire on a Budget?</span>
                <span>Post a job and find candidates</span>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Post for Free
                  </button>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div
              className="col-md-4"
              style={{ marginLeft: '-30px', marginRight: '-30px' }}
            >
              <div
                className="card mb-4 box-shadow"
                style={{ marginTop: '-20%' }}
              >
                <div
                  className="card-header"
                  style={{ background: '#FFCBD3', color: '#FF647C', padding: '0px' }}
                >
                  <span className="my-0 font-weight-normal">Most Popular</span>
                </div>
                <div className="card-header" style={{ background: 'white' }}>
                  <h5 className="my-0 font-weight-normal">Top Job Vacancy</h5>
                  <span
                    className="my-0 font-weight-bold"
                    style={{ color: '#2d9cdb', fontSize: '25px' }}
                  >
                    NGN 50,000
                  </span>
                  <div>
                    <small className="my-0 font-weight-bold">30 Days</small>
                  </div>
                </div>
                <span className="my-0  font-weight-bold">
                  Hire the right fit, faster
                </span>
                <span
                  className="my-0 font-weight-bold"
                  style={{ padding: '15px' }}
                >
                  With our HR support, we provide all the neccessary tools to
                  enable you employ the best fit for your organization
                </span>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                    <li>Help center access</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                    style={{color:'white'}}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div className="col-md-4">
              <div
                className="card mb-4 mt-4 box-shadow"
                style={{ borderTop: '4px solid #EB5757' }}
              >
                <div className="card-header" style={{ background: 'white' }}>
                  <h5 className="my-0 font-weight-normal">
                    Pro Standard Recruit
                  </h5>
                  <span
                    className="my-0 font-weight-bold"
                    style={{ color: '#2d9cdb' }}
                  >
                    NGN 100,000
                  </span>
                  <div>
                    <small className="my-0 font-weight-bold">30 Days</small>
                  </div>
                </div>
                <span>
                  Let the professional handle it we do the heavy lifting you
                  just hire
                </span>

                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button
                    type="button btn-primary"
                    className="btn btn-lg btn-block btn-outline-primary"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5" style={{background:"white", padding:"50px"}}>
      <div  class="container">
         <div class="row">
           <div className={styles.card_section}></div>
            <div class="col-md-8">
               <div class="row">
                  <div class="col-md-4">
                     <div class="card-deck">
                        <div class="card card-images">
                           <img src="https://res.cloudinary.com/davak/image/upload/v1598219360/Rectangle_60_iktzgn.png" alt=""/>
                           <div class="card-body">
                              <h3>Philip Ofei</h3>
                              <p>Human Resource Manager</p>
                           </div>
                        </div>
                        
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="card-deck">
                        <div class="card card-images">
                           <img src="https://res.cloudinary.com/davak/image/upload/v1598219361/Rectangle_60-1_kw9spi.png" alt=""/>
                           <div class="card-body">
                              <h3>Philip Ofei</h3>
                              <p class="acct-mgr">Account Manager</p>
                           </div>
                        </div>
                        
                     </div>
                  </div>
                  <div class="col-md-4">
                     <div class="card-deck">
                        <div class="card card-images">
                           <img src="https://res.cloudinary.com/davak/image/upload/v1598219361/Rectangle_60-2_ilahnt.png" alt=""/>
                           <div class="card-body">
                              <h3>Philip Ofei</h3>
                              <p class="acct-mgr">Sales & Marketing</p>
                           </div>
                        </div>  
                     </div>
                  </div>
               </div>
               
            </div>
           
            <div class="col-md-4 Need-help">
                     <div class="card-body">
                        <h3> Need help with posting a Job? </h3>
                        <p>Contact Us Today</p>
                        <button class="buttons btn btn-primary font-weight-bold" style={{width:"170px", height:"50px"}}>Contact Us</button>
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

export default employer;

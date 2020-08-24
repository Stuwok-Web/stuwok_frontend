import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import SearchJob from '../components/SearchJob';
import JobCard from '../components/JobCard';
import { Button } from 'react-bootstrap';
export default function Home() {
  return (
    <>
      <Head>
        <title>Stuwok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={styles.topsection}>
          <div className="container" style={{ marginTop: '150px' }}>
            <div className="row" style={{ height: '400px' }}>
              <div className="col-md-6">
                <h2 className={styles.textSection}>
                  Student? Lets get you started to gaining{' '}
                  <span className={styles.span}>Experience</span> and{' '}
                  <span className={styles.span}>Earning</span>
                </h2>

                <p className={styles.ptextSection}>
                  Pretium aliquet cursus erat venenatis sit. Ut purus orci purus
                  lacus ornare. Pharetra nibh sociis augue neque posuere
                  phasellus
                </p>
                <Button
                  size="lg"
                  variant="primary"
                  className={styles.getstarted}
                >
                  Get Started
                </Button>
              </div>
              <div className={styles.img}>
                <div className="col-md-4" style={{ height: '400px' }}>
                  <div
                    className="col-md-2"
                    style={{
                      left: '250px',
                      bottom: '100px',
                      transform: 'scale(0.9)',
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/davak/image/upload/v1597832539/Group_3_dkz1fd.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="col-md-2"
                    style={{ bottom: '250px', transform: 'scale(0.9)' }}
                  >
                    <img
                      src="https://res.cloudinary.com/davak/image/upload/v1597832540/Group_2_crrhnc.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
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
        <section class={styles.thirdSection}>
          <div className="container" style={{ marginTop: '50px' }}>
            <span className={styles.faj}>Find a Job</span>
            <div style={{ marginTop: '25px', marginBottom: '40px' }}>
              <SearchJob />
            </div>
            <hr />
            <span className={styles.ro}>Recent Opening</span>
            <JobCard />
          </div>
        </section>
        <section className={styles.fourthSection}>
          <div className="container d-flex flex-row justify-content-center mt-5 mb-5 ">
            <div className="d-flex flex-column justify-content-center mt-5">
              <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column">
                  <span className={styles.getHiredText}>
                    Get hired In these Simple Steps
                  </span>
                  <div className={styles.line}></div>
                </div>
              </div>
              <div class="text-center col-sm-12">
                <div className={styles.cn}>
                  <p>
                    <span className={styles.number}>1</span>{' '}
                    <span className={styles.dot}>.................</span>{' '}
                    <span className={styles.number}>2</span>{' '}
                    <span className={styles.dot}>.................</span>{' '}
                    <span className={styles.number}>3</span>
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div class="row flex-wrap">
                  {/* <!-- first section --> */}
                  <div class="col-md-4 text-center">
                    <h5>Complete your profile</h5>

                    <p>
                      Egestas vestibulum viverra lectus quisqueerat nisl. Nisl
                      pellentesque proin posuere vitae, pulvinar iaculis.
                    </p>
                  </div>

                  <div class="col-md-4 text-center">
                    <h5>Search Interest</h5>

                    <p>
                      Egestas vestibulum viverra lectus quisqueerat nisl. Nisl
                      pellentesque proin posuere vitae, pulvinar iaculis.
                    </p>
                  </div>

                  <div class="col-md-4 text-center">
                    <h5>Submit Application</h5>

                    <p>
                      Egestas vestibulum viverra lectus quisqueerat nisl. Nisl
                      pellentesque proin posuere vitae, pulvinar iaculis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className={styles.fifthSection}>
          <div className="container mt-5 mb-5">
            <div className="d-flex flex-row justify-content-center mt-5">
              <div className="d-flex flex-column">
                <span className={styles.getHiredText}>
                  Testimonials From our Users
                </span>
                <div className={styles.line}></div>
              </div>
            </div>
            <div class="card-deck mt-5">
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
        </section> */}
        <section className={styles.sixthSection}>
          <div className="container mt-5 d-flex flex-row justify-content-center">
            <div className="d-flex flex-column mt-5">
              <span className={styles.look}>
                Looking for the perfect Platform to Gain industry Experience and
                Earn Money
              </span>
              <div className="d-flex flex-row justify-content-center">
                <Button
                  size="lg"
                  variant="primary"
                  className={styles.getstarted}
                >
                  Join Stuwok
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.seventhSection}>
          <div className="container mt-5">
            <hr className={styles.line2} />
            <div className="d-flex flex-row justify-content-center mb-5">
              <p className={styles.believe}>
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
        </section>

        {/* <section className={styles.eightSection}>
          <div className="container mb-5">
            <div className="row mt-5">
              <div className="col-md-7 flex-wrap">
                <h3 className={styles.aylf}>Are you looking for?</h3>
                <div className={styles.oppoBtn}>
                  <div>
                    <Button className={styles.aylfb} size="sm">
                      Part time
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb} size="sm">
                      Jobs
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb} size="sm">
                      Internships
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb} size="sm">
                      Evening Jobs
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb2} size="sm">
                      Weekend Jobs
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb2} size="sm">
                      Freelance
                    </Button>
                  </div>
                  <div>
                    <Button className={styles.aylfb2} size="sm">
                      Contract Jobs
                    </Button>
                  </div>
                </div>
                <span className={styles.vacancy}>Check all our vacancies</span>
              </div>
              <div className="col-md-5">
                <h3 className={styles.aylf}>Create your Free CV</h3>
                <div>
                  <Button
                    variant="primary"
                    size="lg"
                    className={styles.cvbutton}
                  >
                    Create CV
                  </Button>
                </div>
                <span className={styles.cvtext}>
                  Use our Free CV Template to create a professional looking CV
                  quickly
                </span>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
}

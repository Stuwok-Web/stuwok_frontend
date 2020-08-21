import React from 'react';
import styles from '../styles/Footer2.module.css';
import {Button} from 'react-bootstrap'
const Footer2 = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid text-center text-md-left container">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3">
            <a href="#">
              <img
                alt=""
                src="https://res.cloudinary.com/davak/image/upload/v1597917769/LOGO_f5hqc1.png"
              />
            </a>
            <p className={styles.footer_text}>
              Id varius ultrices tellus faucibus nec non euismod eget accumsan.
              Ac eget egestas enim vestibulum neque sed tincidunt arcu. Et sed
              tortor, amet in purus, elit dolor felis viverra. Dui, mattis ipsum
              sit adipiscing sem lacus arcu risus.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4 mb-md-0 mb-3 mt-3">
                <div>
                  <div className="mb-4">
                    <h2 className={styles.explore}>Explore</h2>
                  </div>
                  <div>
                    <div className={styles.explore_ul}>
                      <span className={styles.explore_list}>Home</span>
                    </div>
                    <div className={styles.explore_ul}>
                      <span className={styles.explore_list}>About Us</span>
                    </div>
                    <div className={styles.explore_ul}>
                      <span className={styles.explore_list}>Contact Us</span>
                    </div>
                    <div className={styles.explore_ul}>
                      <span className={styles.explore_list}>FAQ</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-md-0 mb-3 mt-3">
                <div>
                  <div>
                    <div className="mb-4">
                      <h2 className={styles.explore}>Services</h2>
                    </div>
                    <div>
                      <div className={styles.explore_ul}>
                        <span className={styles.explore_list}>Find Jobs</span>
                      </div>
                      <div className={styles.explore_ul}>
                        <span className={styles.explore_list}>Hire Intern</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <h2 className={styles.explore}>Legal</h2>
                    </div>
                    <div>
                      <div className={styles.explore_ul}>
                        <span className={styles.explore_list}>Privacy</span>
                      </div>
                      <div className={styles.explore_ul}>
                        <span className={styles.explore_list}>
                          Terms & Condition
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-md-0 mb-3 mt-3">
                <div>
                  <div className="mb-4">
                    <h2 className={styles.explore}>Follow</h2>
                  </div>
                  <img
                    src="https://res.cloudinary.com/davak/image/upload/v1597914513/facebook_oeramo.png"
                    alt="facebook"
                    className={styles.socials}
                  />
                  <img
                    src="https://res.cloudinary.com/davak/image/upload/v1597914513/instagram_itxrl8.png"
                    alt="insta"
                    className={styles.socials}
                  />
                  <img
                    src="https://res.cloudinary.com/davak/image/upload/v1597914513/linkedin_gmtkqh.png"
                    alt="insta"
                    className={styles.socials}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-md-0 mb-3 mt-3">
            <div className="mb-4">
              <h2 className={styles.explore}>Connect</h2>
            </div>
            <span className={styles.subscribe}>
              Subscribe to our Newsletter
            </span>

            <ul className="list-unstyled">
              <form className="form">
                <div className="form-group">
                  <input
                    type="name"
                    className="form-control mt-3 "
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control mt-3 "
                    placeholder="Email"
                  />
                </div>
                <div className="d-flex justify-content-end">

                <Button className={styles.subbtn}>Subscribe</Button>

                </div>
              </form>
            </ul>
          </div>
        </div>

        <hr style={{ background: '#666666' }} />
      </div>

      <div className="footer-copyright container py-3">
        StuWork. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer2;

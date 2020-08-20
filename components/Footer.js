import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const Forme = (
    <>
      <Form className="mt-3">
      <Form.Group>
          <Form.Control type="text" placeholder=" Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <div className="d-flex justify-content-end">

        <Button className={styles.subbtn}>Subscribe</Button>
        </div>
      </Form>
    </>
  );
  return (
    <section className={styles.footer}>
      <div className="container" style={{ margin: '100px' }}>
        <div className={styles.grid_container}>
          <div className={styles.grid_one}>
            <div className="mb-4">
              <img
                src="https://res.cloudinary.com/davak/image/upload/v1597917769/LOGO_f5hqc1.png"
                alt=""
              />
            </div>
            <span className="mt-4">
              Id varius ultrices tellus faucibus nec non euismod eget accumsan.
              Ac eget egestas enim vestibulum neque sed tincidunt arcu. Et sed
              tortor, amet in purus, elit dolor felis viverra. Dui, mattis ipsum
              sit adipiscing sem lacus arcu risus.
            </span>
          </div>
          <div>
            <div className="mb-5 mt-3">
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
          <div>
            <div>
              <div className="mb-5 mt-3">
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
                  <span className={styles.explore_list}>Terms & Condition</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5 mt-3">
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
          <div>
            <div className="mb-5 mt-3">
              <h2 className={styles.explore}>Connect</h2>
            </div>
            <div >

            <span className={styles.subscribe}>
              Subscribe to our Newsletter
            </span>
            {Forme}
            </div>
          </div>
        </div>
        <hr style={{background:"#666666"}}/>
        <span>StuWork. All Rights Reserved</span>
      </div>
    </section>
  );
};

export default Footer;

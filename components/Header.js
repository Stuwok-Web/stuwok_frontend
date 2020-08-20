import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import styles from '../styles/Header.module.css';
import Mobile from './Mobile';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleShow = (event) => {
    setShow(!show);
  };
  const menu = (
    <svg viewBox="0 0 100 80" width="30" height="30">
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  );

  return (
    <>
      <Navbar className={styles.navbar}>
        <Navbar.Brand
          // style={{
          //   marginLeft: '100px',
          //   marginRight: '50px',
          // }}
          className={styles.brand}
          href="#"
        >
          <img
            src="https://res.cloudinary.com/davak/image/upload/v1597762030/Stuwork_cbkvex.png"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <div className={styles.nav_btn} onClick={handleShow}>
            {menu}
          </div>
          <div className={styles.nav_links}>
            <Nav.Link href="" className={styles.navitem}>
              Home
            </Nav.Link>
            <Nav.Link href="" className={styles.navitem}>
              Find Jobs
            </Nav.Link>
            <Nav.Link href="" className={styles.navitem}>
              Hire Intern
            </Nav.Link>
            <Nav.Link href="" className={styles.navitem}>
              About Us
            </Nav.Link>
            <Nav.Link href="" className={styles.navitem}>
              Contact Us
            </Nav.Link>
          </div>
        </Nav>
        <div className={styles.nav_links}>
          <Nav className="mx-auto">
            <Nav.Link href="" className={styles.navitem_2}>
              <span style={{ color: '#2d9cdb' }}>Sign Up</span>
            </Nav.Link>
            <Nav.Link>
              <Button
                style={{ marginTop: '10px', width: '90px' }}
                variant="primary"
                size="sm"
              >
                Sign In
              </Button>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      {/* {show && <Mobile show={show} />} */}
    </>
  );
};

export default Header;

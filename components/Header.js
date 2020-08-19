import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <Navbar
      className={styles.navbar}
    >
      <Navbar.Brand
        style={{
          marginLeft: '100px',
          marginRight: '50px',
        }}
        href="#"
      >
        <img
          src="https://res.cloudinary.com/davak/image/upload/v1597762030/Stuwork_cbkvex.png"
          alt=""
        />
      </Navbar.Brand>
      <Nav className="mx-auto">
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
      </Nav>
      <Nav className="mx-auto">
        <Nav.Link href="" className={styles.navitem_2}>
          <span style={{ color: '#2d9cdb' }}>Sign Up</span>
        </Nav.Link>
        <Nav.Link>
          <Button style={{marginTop:"10px", width:"90px"}} variant="primary" size="sm">
            Sign In
          </Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;

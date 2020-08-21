import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Mobile.module.css';

const Mobile = () => {
  return (
    <>
      <div className={styles.head}>
        <ul className={styles.ulnav}>
          <Link href="#" >
            <span className={styles.navText}>home</span>
          </Link>
          <Link href="#" >
            <span className={styles.navText}>find jobs</span>
          </Link>
          <Link href="#" >
            <span className={styles.navText}>hire intern</span>
          </Link>
          <Link href="#" >
            <span className={styles.navText}>about us</span>
          </Link>
          <Link href="#"> 
            <span className={styles.navText}>contact us</span>
          </Link>
          <Link href="#">
            <span className={styles.navText}>sign up</span>
          </Link>
          <Link href="#">
            <span className={styles.navText}>sign in</span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Mobile;

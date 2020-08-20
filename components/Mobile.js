import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Mobile.module.css';

const Mobile = () => {
  return (
    <>
      <Header />
      <div className={styles.mobile_nav}>
        <ul className={styles.ulnav}>
          <li className={styles.linav}>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mobile;

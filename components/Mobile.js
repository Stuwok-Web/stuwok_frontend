import React from 'react';
import Link from 'next/link';
import styles from '../styles/Mobile.module.css';

const Mobile = () => {
  return (
    <div className={styles.mobile_nav}>
      <ul className={styles.ulnav}>
        <li className={styles.linav}>
          <Link to="">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Mobile;

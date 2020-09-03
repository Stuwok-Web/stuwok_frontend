import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Footer2 from './Footer2';
import styles from '../styles/Layout.module.css';
const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.mainlayoutMain}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer2 />
      </div>
    </>
  );
};

export default Layout;

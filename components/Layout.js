import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return (
        <div className={styles.mainlayoutMain}>
            <Header/>
            <div className={styles.content}>{children}</div>
            <Footer/>
        </div>
    )
}

export default Layout

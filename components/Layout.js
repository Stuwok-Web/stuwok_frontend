import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return (
        <div className={styles.mainlayoutMain}>
            <Header/>
            <div className={styles.content}>{children}</div>
            
        </div>
    )
}

export default Layout

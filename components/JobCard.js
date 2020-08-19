import React from 'react'
import styles from '../styles/JobCard.module.css'

const JobCard = () => {
    return (
        <div className={styles.card}>
            <div>
                <img src="https://stuwork.netlify.app/assets/green-like.svg" alt="img"/>
            </div>
            <div className={styles.jobDetails}>
                <span className={styles.jobCompany}>Andela</span>
                <span className={styles.jobPosition}>UI/UX Designer</span>
            </div>
            <div style={{marginBottom:"auto"}}>
                heart
            </div>
        </div>
    )
}

export default JobCard

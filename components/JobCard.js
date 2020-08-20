import React, { useState } from 'react';
import styles from '../styles/JobCard.module.css';
import Heart from '../icons/Heart';
import { jobs } from '../data/jobs';

const JobCard = () => {
  //   const [like, setLike] = useState(true);

  //   setLike(!like);
  //   let btn_class = like ? 'blackButton' : 'whiteButton';

  return (
    <>
      <div className="row">
        {jobs.map((job) => {
          return (
            <div className="col-md-6" style={{marginTop:"20px"}}>
              <div className={styles.card}>
                <div>
                  <img
                    src="https://stuwork.netlify.app/assets/green-like.svg"
                    alt="img"
                  />
                </div>
                <div className={styles.jobDetails}>
                  <span className={styles.jobCompany}>{job.company}</span>
                  <span className={styles.jobPosition}>{job.position}</span>
                  <span className={styles.jobType}>{job.type}</span>
                  <span className={styles.jobSalary}>NGN {job.salary}</span>
                </div>
                <div className={styles.heart_likie}>
                  <Heart className={styles.heart_like} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <div className={styles.viewmore}>
            <span>View more Recent Opening</span> 
        </div>
    </>
  );
};

export default JobCard;

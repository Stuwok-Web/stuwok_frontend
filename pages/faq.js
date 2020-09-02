import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Faq.module.css';
import {
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from 'react-bootstrap';
import { faqs } from '../data/faq';

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? '#DA2020' : '#54D948' }}
      onClick={decoratedOnClick}
      className={styles.tog}
    >
      {/* {children} */}
      {isCurrentEventKey ? '-' : '+'}
    </button>
  );
}

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className={styles.heading_top}>
          <div className="container d-flex">
            <div className={styles.body_image_text}>
              <h1>
                Frequently Asked{' '}
                <span className={styles.students}>Questions</span>
              </h1>
            </div>
          </div>
        </section>
        <section className={styles.first_section}>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h3>General Questions</h3>
                {/* start */}
                {faqs.map((f) => (
                  <Accordion defaultActiveKey={f._id} className="mb-5">
                    <Card className={styles.cmain}>
                      <Card.Header className={styles.chead}>
                        <div className="d-flex justify-content-between">
                          <div>
                            {' '}
                            <h5>{f.questions}</h5>{' '}
                          </div>
                          <ContextAwareToggle
                            eventKey={f._id}
                          ></ContextAwareToggle>
                        </div>
                      </Card.Header>
                      <>
                        <Accordion.Collapse eventKey={f._id}>
                          <Card.Body>{f.answers}</Card.Body>
                        </Accordion.Collapse>
                      </>
                    </Card>
                  </Accordion>
                ))}

                {/* end */}
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <h3>Extended Questions</h3>
                <p className={styles.block}></p>
                <p className={styles.offices_text}>
                  <i className="fa fa-location"></i> Alienum phaedrum torquatos
                  nec eu, vis detraxit periculis ex, nihil expetendis in mei.
                  Mei an pericula euripidis, hinc partem ei est. Eos ei nisl
                  graecis, vix aperiri consequat an. Eius lorem tincidunt vix
                  at, vel pertinax sensibus id, error epicurei mea et. Mea
                  facilisis urbanitas moderatius id. Vis ei rationibus
                  definiebas, eu qui purto zril laoreet. Ex error omnium
                  interpretaris pro, alia illum ea vim.{' '}
                </p>
                <Link href="#">
                  <span className={styles.readmore}>Read more {'>>'} </span>
                </Link>
                <div className={styles.address_section}>
                  <h3>Contact Support</h3>
                  <p className={styles.block}></p>

                  <p className={styles.address_text}>
                    Think we didnt answer your questions correctly or you still
                    have other arreas we didnt cover?
                  </p>
                  <p className={styles.address_text}>Why dont you call us!</p>
                </div>

                <div>
                  <span className={styles.number}>+234 70 612 3456</span>
                </div>
                <div>
                  <span className={styles.number}>+234 70 612 3456</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default faq;

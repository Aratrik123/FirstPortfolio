import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-right" data-aos-delay="400">Hi, I'm Aratrik</h1>
        <p className={styles.description} data-aos="fade-right" data-aos-delay="600">
        I’m a tech enthusiast from Kolkata!<br />
        I am an undergrad in Computer Science and Engineering. 
        </p>
        <a href="https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222/" className={styles.contactBtn} data-aos="fade-right" data-aos-delay="800">
          Contact Me!
        </a>
      </div>
      <img
        src={getImageUrl("hero/aratrik-balance.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg} data-aos="fade-left" data-aos-delay="400"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
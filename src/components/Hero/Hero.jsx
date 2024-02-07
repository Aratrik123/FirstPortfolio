import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-right" data-aos-delay="400">Hey, its Aratrik here!</h1>
        <p className={styles.description} data-aos="fade-right" data-aos-delay="600">
        I’m a tech and maths enthusiast!<br />
        Currently pursuing Computer Science and Engineering. 
        </p>
        <a href="https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222/" className={styles.contactBtn} data-aos="fade-right" data-aos-delay="800">
          Contact Me!
        </a>
      </div>
      <a href="https://www.instagram.com/in_dealing_dead_03/"><img
        src={getImageUrl("hero/aratrik-balance.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg} data-aos="fade-left" data-aos-delay="400"
      /></a>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
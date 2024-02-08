import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title} data-aos="fade-right" data-aos-delay="200">About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aratrik.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aratrik} data-aos="flip-right" data-aos-delay="200"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} data-aos="fade-right" data-aos-delay="200">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a front-end developer with little experience in building responsive sites!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-aos="fade-left" data-aos-delay="200">
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have small amount of experience developing fast and optimised APIs and controllers.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem} data-aos="fade-right" data-aos-delay="200">
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I can use a bit of Figma, Blender and Canva too.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

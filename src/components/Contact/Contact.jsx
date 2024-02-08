import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text} data-aos="fade-right" data-aos-delay="200">
        <h2>Let's Connect!</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" data-aos="fade-right" data-aos-delay="400"/>
          <a href="mailto:aratrikaratrik@gmail.com" data-aos="fade-right" data-aos-delay="300">aratrikaratrik@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon" data-aos="fade-right" data-aos-delay="500"
          />
          <a href="https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222/" data-aos="fade-right" data-aos-delay="600">Aratrik Bandyopadhyay</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" data-aos="fade-right" data-aos-delay="800"/>
          <a href="https://github.com/Aratrik123" data-aos="fade-right" data-aos-delay="1000">Aratrik123</a>
        </li>
      </ul>
    </footer>
  );
};

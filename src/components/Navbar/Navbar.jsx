import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/" data-aos="fade-right" data-aos-delay="400">
        Welcome!
      </a>
      <div className={styles.menu} data-aos="fade-up" data-aos-delay="600">
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" data-aos="fade-up" data-aos-delay="400">About</a>
          </li>
          <li>
            <a href="#experience" data-aos="fade-up" data-aos-delay="800">Experience</a>
          </li>
          <li>
            <a href="#projects" data-aos="fade-up" data-aos-delay="1200">Projects</a>
          </li>
          <li>
            <a href="#contact" data-aos="fade-up" data-aos-delay="1600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

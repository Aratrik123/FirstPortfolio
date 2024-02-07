import React from 'react';
import styles from "./Footer.module.css";
import 'aos/dist/aos.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        Portfolio by Aratrik!
        ©{currentYear}
      </div>
    </footer>
  );
};

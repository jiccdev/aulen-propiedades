import React from 'react';
import styles from '../../../styles/Layout/Footer.module.css';

const About = () => {
  return (
    <div className={styles.aboutFooterContainer}>
      <h3 className={styles.aboutFooterTitle}>Sobre Nosotros</h3>
      <p className={styles.aboutFooterParagraph}>
        Somos una empresa dedicada a la asesoría e intermediación de compra,
        arriendo y administración de propiedades, tanto para personas naturales
        como jurídicas en el territorio chileno.
      </p>
    </div>
  );
};

export default About;

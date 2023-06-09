import React from 'react';
import { Fade } from 'react-awesome-reveal';
import keyImg from '../../../../assets/img/SoyPropietario/key.jpg';
import styles from '../../../../styles/Section/soy-propietario/quiero-vender/HeroSection/HeroSection.module.css';

export const HeroSection = () => {
  return (
    <header
      className={`${styles.customCol} ${styles.sellPageHeader} text-center mt-[5rem] xl:mt-[7rem]`}
    >
      <h1 className="text-xl xl:text-3xl mb-6 xl:mb-10">
        ¡Vende tu propiedad rápido y sin complicaciones!
      </h1>

      <div className={`${styles.customRow} ${styles.imgAndForm}`}>
        <Fade cascade>
          <div className={`${styles.customRow} ${styles.imgContainer}`}>
            <img
              className={`${styles.imgHeader}`}
              src={keyImg}
              alt="imagen-header"
            />
          </div>
        </Fade>
      </div>
    </header>
  );
};

export default HeroSection;

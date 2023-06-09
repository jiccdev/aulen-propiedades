import React from 'react';
import styles from '../../../../styles/Section/soy-inversionista/unidades-en-remate/InvestmentSteps/InvestmentSteps.module.css';

const InvestmentStep = ({ stepData }) => {
  return (
    <div
      key={stepData.id}
      className={`${styles.customRow}  ${stepData.style} ${styles.divContainer}`}
    >
      {stepData.img}
      <div className={`${styles.customRow} ${styles.idtext}`}>
        <h2 className="ml-2.5">{stepData.id}</h2>
        <div className={`${styles.customCol} ${styles.textContainer}`}>
          <h3 className={`${styles.step__h3}`}>{stepData.h3}</h3>
          <p className={`text-sm`}>{stepData.p}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentStep;

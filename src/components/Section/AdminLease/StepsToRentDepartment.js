import React from 'react';
import HeaderSection from '../HeaderSection';
import StepCard from '../../Card/StepCard';
import { stepsToRentDepartmentData } from '../../../data/stepsToRentDepartment';
import styles from '../../../styles/Section/administracion-de-arriendo/SoldHome.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const StepsToRentDepartment = () => {
  return (
    <Row className={styles.rowContainer}>
      <Col xl={8} className={styles.col}>
        <HeaderSection titleSection="¡Mantén tú depa ocupado y a ti desocupado!" />

        <Row className={styles.rowItems}>
          {stepsToRentDepartmentData &&
            stepsToRentDepartmentData.map((step) => (
              <StepCard key={step?.id} step={step} />
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default StepsToRentDepartment;

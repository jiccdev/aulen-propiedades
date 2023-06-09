import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import SoldHome from '../../../assets/img/SoldHome/sold-home.jpg';
import styles from '../../../styles/Section/Inicio/NewProperties.module.css';

/** Bootstrap components */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewProperties = () => {
  return (
    <Fade delay={300}>
      <div className={styles.newPropertiesContainer}>
        <Row className={styles.rowNewProperties}>
          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <Fade cascade>
              <div className={styles.newPropertiesColAbsolute}>
                <img
                  src={SoldHome}
                  className={styles.newPropertiesImg}
                  alt="imagen-nuevas-propiedades"
                />
              </div>
            </Fade>
          </Col>

          <Col sm={12} lg={6} xl={6} className={styles.newPropertiesCol}>
            <Fade cascade>
              <div className={styles.newPropertiesColContent}>
                <h2 className={styles.newPropertiesColTitle}>
                  Propiedades nuevas
                </h2>
                <p>
                  Un modelo de inversión único en el mercado que genera hasta un
                  15% de rentabilidad por operación. Invierte de manera segura,
                  y cuenta con la asesoría de expertos que te guiaran según tus
                  objetivos, desde la elección del inmueble hasta la
                  capitalización de tu inversión.
                </p>
                <div className={styles.consultationContainer}>
                  <Link
                    // to="/soy-inversionista/unidades-nuevas#un-contacto"
                    to="/soy-inversionista/unidades-en-remate#ur-contacto"
                    className={styles.consultation}
                  >
                    Quiero una asesoría
                  </Link>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </div>
    </Fade>
  );
};

export default NewProperties;

import React, { useEffect, useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import AliceCarousel from 'react-alice-carousel';
import { ClientsContext } from '../../../context/clients/ClientsContext';
import HeaderSection from '../HeaderSection';
import CustomerCard from '../../Card/CustomerCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from '../../../styles/Section/customer-experience/CustomerExperience.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
  1920: { items: 3 },
};

const CustomerExperience = () => {
  const { contextDataClients } = useContext(ClientsContext);
  const [clients, , getClientList] = contextDataClients;

  useEffect(() => {
    getClientList();
  }, []);

  return (
    <section
      id="customerExperience"
      className={styles.customerExperienceContainer}
    >
      <HeaderSection titleSection="Conoce la experiencia de nuestros clientes" />
      <Fade cascade>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          items={clients?.map((client, idx) => (
            <Col sm={12} key={idx}>
              <CustomerCard client={client} />
            </Col>
          ))}
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2500}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
        />
      </Fade>
    </section>
  );
};

export default CustomerExperience;

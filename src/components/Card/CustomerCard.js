import React from 'react';
import { truncateString } from '../../utils';
import styles from '../../styles/Card/CustomerCard.module.css';

/** Bootstrap components */
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CustomerCard = ({ client }) => {
  const { avatar, email, first_name, last_name } = client;
  return (
    <Col sm={4}>
      <Card className={styles.card}>
        <div className={styles.cardImgContainer}>
          <img
            src={avatar}
            alt={`avatar-${first_name}-${last_name}`}
            className={styles.avatar}
          />
        </div>

        <Card.Body className={styles.cardBody}>
          <Card.Text className={styles.cardText}>
            {truncateString(
              '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"',
              180
            ) || ''}
          </Card.Text>
          <Card.Title className={styles.cardTitle}>
            {first_name} {last_name || ''}
            <small className={styles.cardTextSmall}>{email}</small>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomerCard;

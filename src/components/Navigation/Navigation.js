import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem';
import { navigationData } from '../../data/navigation';
import styles from '../../styles/Layout/Navigation.module.css';

/** Bootstrap components */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoPage from '../LogoPage/LogoPage';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Fragment>
      <Navbar.Toggle className={styles.navbarToggle} />

      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand`}
        aria-labelledby={`offcanvasNavbarLabel-expand`}
        placement="start"
        className={styles.navbarOffcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
            <LogoPage />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Nav
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          {navigationData &&
            navigationData.map((navItem) => (
              <NavigationItem
                key={navItem?.id}
                navItem={navItem}
                navigationData={navigationData}
              />
            ))}
        </Nav>
      </Navbar.Offcanvas>
    </Fragment>
  );
};

export default Navigation;

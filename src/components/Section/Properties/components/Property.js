import React, { useState, useEffect } from 'react';
import Section from '../../../Section/Section';
import { PDFViewer } from '@react-pdf/renderer';
import GalleryCarousel from '../../../GalleryCarousel/GalleryCarousel';
import Details from './Details';
import Characteristics from './Characteristics';
import PDFView from './PDFView';
import ClipboardProperty from './ClipboardProperty';
import Spinner from '../../../Spinner/Spinner';
import { icons } from '../../../Icons';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/Section/properties/details/Details.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InformationOnTheArea from './InformationOnTheArea';
import MeetingSchedule from '../../../Forms/MeetingSchedule';
import ModalCustom from '../../../ModalCustom/ModalCustom';

const PropertyComponent = ({ property }) => {
  const [loadingOnStart, setLoadingOnStart] = useState(true);
  const [showModalShare, setShowModalShare] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [copied, setCopied] = useState(false);
  const { FaShare, MdSimCardDownload } = icons;

  const lng = Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;


  /** Render clipboard property modal */
  const renderContent = () => (
    <ClipboardProperty
      {...{
        propertyId: property?.id,
        copied,
        setCopied,
      }}
    />
  );

  /** Render Property detail */
  const renderContentPdf = () => (
    <PDFViewer className="w-full h-[90vh]">
      <PDFView property={property} />
    </PDFViewer>
  );

  useEffect(() => {
    if (Object.keys(property).length > 0) {
      setLoadingOnStart(false);
      return;
    }
  }, [property]);

  return (
    <Section>
      {loadingOnStart && <Spinner />}

      {Object.keys(property).length > 0 && (
        <div className={styles.propertyDetailContainer}>
          <ul className={styles.propertyTypeInfo}>
            <li>
              <Link to="/propiedades">Volver</Link>
            </li>
            <li className={styles.divider}>|</li>
            <li>{property?.commune}</li>
            <li>{property?.address}</li>
          </ul>

          <Row className={styles.row}>
            <Col xs={12} xl={9}>
              <GalleryCarousel items={property} />
              <Characteristics propertyData={property} />
            </Col>

            <Col xs={12} xl={3} className={styles.col}>
              <div className={styles.deptoDetailsShare}>
                <Button
                  className={styles.printLink}
                  onClick={() => setShowModalShare(true)}
                >
                  <FaShare className="mr-1" />
                  Compartir
                </Button>

                <Button
                  className={styles.printLink}
                  onClick={() => setShowModalDetail(true)}
                >
                  <MdSimCardDownload className="mr-1" />
                  Imprimir PDF
                </Button>
              </div>

              <Details propertyData={property} />
            </Col>
          </Row>

          <InformationOnTheArea propertyData={property} />

          <div id="cotizar-contacto">
            <MeetingSchedule />
          </div>
        </div>
      )}

      <ModalCustom
        renderTrigger={() => null}
        isOpenProp={showModalShare}
        renderContent={renderContent}
        contentExtraClass="max-w-2xl"
        modalTitle="Compartir Propiedad"
        onCloseModal={() => {
          setShowModalShare(false);
        }}
      />

      <ModalCustom
        renderTrigger={() => null}
        isOpenProp={showModalDetail}
        renderContent={renderContentPdf}
        contentExtraClass="max-w-[85%]"
        modalTitle="Descargar PDF"
        onCloseModal={() => {
          setShowModalDetail(false);
        }}
      />
    </Section>
  );
};

export default PropertyComponent;

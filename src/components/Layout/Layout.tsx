import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Container, Row, Col } from 'reactstrap';

import styles from './Layout.module.scss';

const Layout = (props: any) => (
  <>
    <Topbar />
    <Container fluid>
      <Row>
        {props.filters ? <Sidebar city={props?.city} /> : null}
        {props.filters ? <Col md="9" lg="10" className={`${styles.content} ml-sm-auto px-4`}>
          {props.children}
        </Col> : <Col md="12" lg="12" className={`${styles.content} ml-sm-auto px-4`}>
            {props.children}
          </Col>}
      </Row>
    </Container>
  </>
);

export default Layout;

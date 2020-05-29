import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Container, Row, Col } from 'reactstrap';

import styles from './Layout.module.scss';

const Layout: React.FC = ({ children }) => (
  <>
    <Topbar />
    <Container fluid>
      <Row>
        <Sidebar />
        <Col md="9" lg="10" className={`${styles.content} ml-sm-auto px-4`}>
          {children}
        </Col>
      </Row>
    </Container>
  </>
);

export default Layout;

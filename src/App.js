import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Inbox from './components/Inbox';

function App() {
  return (
    <div>
      <Navbar />
      <Container fluid style={{ paddingTop: '20px' }}>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Inbox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

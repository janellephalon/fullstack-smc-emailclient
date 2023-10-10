import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shared-features/App.css';

// Components
import Navbar from './shared-features/Navbar';
import Sidebar from './shared-features/Sidebar';
import InboxList from './inbox-features/message-lists/InboxList';
import Drafts from './inbox-features/message-lists/DraftList';
import Sent from './inbox-features/message-lists/SentList';
import TrackSent from './inbox-features/message-lists/TrackSent';
import Trash from './inbox-features/message-lists/TrashList';


function App() {
  const [activeTab, setActiveTab] = useState('inbox'); // default to inbox

  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="container-box">
          <Col md={3} className="sidebar-scroll">
            <Sidebar setActiveTab={setActiveTab} />
          </Col>
          <Col md={8} className="inbox-scroll">
            {activeTab === 'inbox' && <InboxList />}
            {activeTab === 'drafts' && <Drafts />}
            {activeTab === 'sent' && <Sent />}
            {activeTab === 'track-sent' && <TrackSent />}
            {activeTab === 'trash' && <Trash />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

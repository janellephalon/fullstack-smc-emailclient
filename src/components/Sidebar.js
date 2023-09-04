import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

// Components
import ComposeModal from './ComposeModal';

const Sidebar = () => {

  const [showComposeModal, setShowComposeModal] = useState(false);

  const handleComposeClick = () => {
    setShowComposeModal(true);
  };

  const handleCloseModal = () => {
    setShowComposeModal(false);
  };

  return (
    <div className="col-md-3 pt-3">
      <ComposeModal show={showComposeModal} onClick={handleComposeClick} onClose={handleCloseModal} />

      <div className=''>
        <ListGroup className="sidebar-styles">
          <ListGroup.Item action href="#inbox" className="">
            Inbox
          </ListGroup.Item>
          <ListGroup.Item action href="#sent" className="">
            Sent
          </ListGroup.Item>
          <ListGroup.Item action href="#drafts" className="">
            Drafts
          </ListGroup.Item>
          <ListGroup.Item action href="#spam" className="">
            Spam
          </ListGroup.Item>
          <ListGroup.Item action href="#trash" className="">
            Trash
          </ListGroup.Item>
        </ListGroup>

      </div>
    </div>
  );
};

export default Sidebar;

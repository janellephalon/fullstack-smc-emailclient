import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

// Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faPaperPlane, faCheck, faFile, faTrash } from '@fortawesome/free-solid-svg-icons';

// Inbox Imports
import ComposeModal from '../inbox-features/components/ComposeModal';

const Sidebar = ({ setActiveTab }) => {

  const [showComposeModal, setShowComposeModal] = useState(false);

  const handleComposeClick = () => {
    setShowComposeModal(true);
  };

  const handleCloseModal = () => {
    setShowComposeModal(false);
  };

  return (
    <div className="pt-3">
      <ComposeModal show={showComposeModal} onClick={handleComposeClick} onClose={handleCloseModal} />

      <div className='mt-2'>
      <ListGroup className="sidebar-styles">
          <ListGroup.Item action onClick={() => setActiveTab('inbox')} className="">
            <FontAwesomeIcon icon={faInbox} className="ml-2 sidebar-icon" /> Inbox
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setActiveTab('drafts')} className="">
            <FontAwesomeIcon icon={faFile} className="ml-2 sidebar-icon" /> Drafts
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setActiveTab('sent')} className="">
          <FontAwesomeIcon icon={faPaperPlane} className="ml-2 sidebar-icon" /> Sent
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setActiveTab('track-sent')} className="">
          <FontAwesomeIcon icon={faCheck} className="ml-2 sidebar-icon" /> Track Sent
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => setActiveTab('trash')} className="">
          <FontAwesomeIcon icon={faTrash} className="ml-2 sidebar-icon" /> Trash
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function EmailModal({ email, show, onClose }) {

  function dateFormat(dateString) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{email?.subject}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        From: {email?.sender}<br />
        Date: {dateFormat(email?.createTime)}<br />
        <hr />
        {email?.content}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmailModal;

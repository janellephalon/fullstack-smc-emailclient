import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';  // Import axios

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ComposeModal = () => {
    const [show, setShow] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [createTime, setCreateTime] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDraftSave = async () => {
      try {
          const response = await axios.post('http://localhost:5000/draft-message', {
              to: [recipient],
              subject: subject,
              textBody: message,
              createTime: createTime,
          });

          console.log('Draft response:', response.data);

          alert('Draft saved successfully!');
      } catch (error) {
          console.error('Error saving draft:', error);
          alert('Error saving draft. Please try again.');
      }

      handleClose();
  };

    const handleSend = () => {
        // Logging the data for now
        console.log('Sending Email');
        console.log('Recipient:', recipient);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Later, you can integrate the backend API call here for sending the email

        handleClose();
    };

    return (
        <>
          <div className='col-md-12'>
            <Button variant="" onClick={handleShow} className='btn compose-button' style={{ marginBottom: '20px', width: '100%' }}>
                Compose <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
            </Button>
          </div>
          <div className='modal-style'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>Compose Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>To:</Form.Label>
                            <Form.Control type="email" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Subject:</Form.Label>
                            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDraftSave}>
                        Save as Draft
                    </Button>
                    <Button variant="primary" onClick={handleSend}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
          </div>
        </>
    );
};

export default ComposeModal;

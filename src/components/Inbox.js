import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const Inbox = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        // Mock data for the starter files
        const mockEmails = [
            {
                id: 'msg12345',
                subject: 'DataMotion Secure Message Center API',
                sender: 'security@datamotion.com',
                dateReceived: '2023-08-01 14:23:00',
                isRead: false
            },
            {
                id: 'msg12346',
                subject: 'DataMotion is awesome!',
                sender: 'customerfeedback@datamotion.com',
                dateReceived: '2023-08-02 09:10:00',
                isRead: true
            },
            // ... additional emails as required
        ];

        setEmails(mockEmails);
    }, []);

    return (
      <div className="col-md-9 pt-3">
        <ListGroup className='inbox-style'>
            {emails.map(email => (
                <ListGroup.Item key={email.id} className='email-item'>
                    <div className="email-content">
                        <p className="sender-email">{email.sender}</p>
                        <p className="email-subject">{email.subject}</p>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    );
};

export default Inbox;

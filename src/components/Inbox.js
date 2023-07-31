import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
// import Sidebar from './Sidebar';

const Inbox = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        // This is where we will make the API call to fetch emails
        // For demo purposes, let's use mock data for the starter files
        const mockEmails = [
            { id: 1, subject: 'Secure Message Center API', sender: 'john@example.com' },
            { id: 2, subject: 'DataMotion is Awesome', sender: 'jane@example.com' },
            // More emails here...
        ];

        setEmails(mockEmails);
    }, []);

    return (
        <ListGroup>
            {emails.map(email => (
                <ListGroup.Item key={email.id}>
                    <h4>{email.subject}</h4>
                    <p>{email.sender}</p>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default Inbox;

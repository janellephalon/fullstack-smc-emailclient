import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Inbox = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        // This is where you would make the API call to fetch emails
        // For demo purposes, let's use mock data
        const mockEmails = [
            { id: 1, subject: 'Hello World', sender: 'john@example.com' },
            { id: 2, subject: 'React is Awesome', sender: 'jane@example.com' },
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

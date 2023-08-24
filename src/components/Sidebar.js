import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div style={{ width: '100%', maxWidth: '250px', flexShrink: 0 }}>
            <Button variant="primary" size="lg" style={{ marginBottom: '20px', width: '100%' }} className="btn">
                Compose
            </Button>
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

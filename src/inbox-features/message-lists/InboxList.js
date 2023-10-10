import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

// Inbox Components
import InboxHeader from '../components/InboxHeader';
import OpenModal from '../components/OpenModal';

const InboxList = () => {
    const [emails, setEmails] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Mock data for the starter files
        const mockEmails = [
            {
                messageId: 'msg12345',
                subject: 'Secure Message Center API',
                sender: 'security@datamotion.com',
                createTime: '2023-08-02 14:23:00',
                content: 'This is a test message',
                isRead: false
            },
            {
              messageId: 'msg12346',
              subject: 'No Code Message Center',
              sender: 'sales@datamotion.com',
              createTime: '2023-08-02 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg12347',
              subject: 'Best Practices for Secure Email',
              sender: 'feedback@datamotion.com',
              createTime: '2023-08-04 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg12348',
              subject: 'Secure Forms',
              sender: 'product@datamotion.com',
              createTime: '2023-08-05 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg12349',
              subject: 'Zero Trust APIs',
              sender: 'security@datamotion.com',
              createTime: '2023-08-05 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg123410',
              subject: 'Auto Provisioning Users',
              sender: 'sales@datamotion.com',
              createTime: '2023-08-05 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg123411',
              subject: 'SMC & AI',
              sender: 'sales@datamotion.com',
              createTime: '2023-08-06 14:23:00',
              content: 'This is a test message',
              isRead: false
            },
            {
              messageId: 'msg123412',
              subject: 'Developer Advocacy',
              sender: 'marketing@datamotion.com',
              createTime: '2023-08-06 14:23:00',
              content: 'This is a test message',
              isRead: false
            }
        ];

        const sortedEmails = mockEmails.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));

        setEmails(sortedEmails);

    }, []);

    // Format date to display in the list
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const today = new Date();
      if (date.toDateString() === today.toDateString()) {
          return date.toLocaleTimeString();
      }
      return date.toLocaleDateString();
    };

    // Sets the selectedEmails state
    const openMessage = (messageId) => {
        const email = emails.find(e => e.messageId === messageId);
        setSelectedEmail(email);
        setShowModal(true);
    };

    const deleteMessage = (messageId) => {
        setEmails(emails.filter(e => e.messageId !== messageId));
    };

    return (
      <>
      <div className='pt-3 pl-5'>
        {/* Inbox Headers */}
        <InboxHeader />
      </div>

        <ListGroup className='inbox-style'>
            {emails.map(email => (
                <div key={email.messageId}
                  className="d-flex text-secondary py-1 border-bottom border-gray email-tem"
                  onClick={() => openMessage(email.messageId)}
                >
                  <div className="col-4 email-item sender-email">{email.sender}</div>
                  <div className="col-4 email-item email-subject">{email.subject}</div>
                  <div className="col-3 email-item date-received">{formatDate(email.createTime)}</div>
                  <div className="col-1 text-right pr-2 email-item">
                    {/* Delete Button */}
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(email.messageId);
                      }}
                    >
                    </button>
                  </div>
                </div>
            ))}
        </ListGroup>

      {/* Email Modal */}
      <OpenModal email={selectedEmail} show={showModal} onClose={() => setShowModal(false)} />
      </>
    );
};

export default InboxList;

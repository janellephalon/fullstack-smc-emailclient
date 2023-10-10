import React from 'react';
import { ListGroup } from 'react-bootstrap';

import InboxHeader from '../components/InboxHeader';


function DraftList() {
  return (
    <div className="pt-3 pl-5">
      {/* Inbox Headers */}
      <InboxHeader />

      {/* Message List */}
      <ListGroup className='inbox-style'>
        <div className="d-flex text-secondary py-3 justify-content-center">
          <p>No drafts emails.</p>
        </div>
      </ListGroup>
    </div>
  );
}

export default DraftList;

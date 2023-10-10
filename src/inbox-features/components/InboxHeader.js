import React from 'react';

function HeaderRow() {
  return (
    <div className="d-flex text-secondary py-1 header-row">
      <div className="col-4 sender-email header-title">Sender</div>
      <div className="col-4 email-subject header-title">Subject</div>
      <div className="col-3 date-received header-title">Date</div>
      <div className="col-1 header-title">Delete</div>
    </div>
  );
}

export default HeaderRow;

import React from 'react';

// adding styling of elements by stylesheets
import './UserOutput.css';

// UserOutput holds two paragraphs
// Pass a variable via props and display it
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
    </div>
  );
};

export default UserOutput;
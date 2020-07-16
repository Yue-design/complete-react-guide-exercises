import React from 'react';

// UserInput holds an input element
const UserInput = (props) => {

  const inputStyle = { // inline styles with your components/elements
    border: '2px solid gray'
  };

  // add a two-way-binding 
  return <input type="text" style={inputStyle} onChange={props.changed} value={props.currentEmail}></input>
};

export default UserInput;
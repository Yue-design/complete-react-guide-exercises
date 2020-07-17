import React from 'react';

// create a new Char component 
const Char = (props) => {

  const style = { // style it as an inline box
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};

export default Char;
import React from 'react';

// create a new validation component which receives the text length as a prop
const Validation = ( props ) => {
  let validationMessage = 'Text too short!';

  if (props.length > 5) { // output certain message depending on the length
    validationMessage = 'Text too long!';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Validation;
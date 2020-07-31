import React from 'react';

const Course = (props) => {
  return (
    <div>
      <p>You selected the Course with ID: {props.match.params.courseId}</p>
    </div>
  )
}

export default Course;
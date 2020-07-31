import React, {useState} from "react";
import { Link, Route } from "react-router-dom";

import Course from "../Course/Course";

const Courses = props => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Vue" }
  ]);

  const lists = courses.map(course => {
    return (
      <div>
        <Link
          key={course.id}
          to={{
            pathname: props.match.url + "/" + course.id,
            search: "?title=" + course.title
          }}
        >
          <article>{course.title}</article>
        </Link>
        <Route path={props.match.url + "/:courseId"} component={Course}></Route>
      </div>
    );
  });

  return (
    <div>
      <h1>Frontend Courses</h1>
      <section>{lists}</section>
    </div>
  );
};

export default Courses;

import React from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";
import Courses from "./containers/Courses/Courses";
import NoMatch from "./components/NoMatch/NoMatch";
import Users from "./containers/Users/Users";

function App() {
  return (
    <div className="App">
      <ol>
        <li>
          Make the courses in "Courses" clickable by adding a link and load the
          "Course" component in the place of "Courses" (without passing any data
          for now)
        </li>
        <li>
          Pass the course title to the "Course" page - pass it as a param or
          score bonus points by passing it as query params (you need to manually
          parse them though!)
        </li>
      </ol>
      <BrowserRouter>
        <nav>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="users">Users</NavLink>
        </nav>
        <Switch>
          <Route path="/courses" component={Courses}></Route>
          <Redirect from="/course" to="/courses"></Redirect>
          <Route path="/users" component={Users}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

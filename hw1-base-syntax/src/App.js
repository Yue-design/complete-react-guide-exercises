import React from 'react';
import './App.css';

// create two new components
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  // add state to the App component
  React.state = { // React Hooks
    email: 'example',
    password: 'password'
  }

  // an event-handler method to manipulate the state
  const changedHandler = (event) => {
    React.setState({email: event.target.value},
      {password: event.target.value});
  }

  return (
    <div className="App">
      <ol>
        <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
        <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
        <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
        <li>React Hooks</li>
      </ol>
      <UserInput changed={changedHandler} currentEmail={React.state.email}></UserInput> 
      <UserInput changed={changedHandler} currentEmail={React.state.password}></UserInput> 
      <UserOutput email={React.state.email}></UserOutput>
      <UserOutput password={React.state.password}></UserOutput>
      <UserOutput email="example@example.com" password="yourpassword"></UserOutput>
    </div>
  );
}

export default App;

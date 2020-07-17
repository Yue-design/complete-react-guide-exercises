import React from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

function App() {
  const state = { // create an input field
    userInput: ''
  }

  const inputChangeHandler = (event) => { // create a change listener
    React.setState( { userInput: event.target.value} );
  }

  const deleteCharHandler = (index) => {
    const text = React.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    React.setState( {userInput: updatedText} );
  }

  const charList = React.state.userInput.split('').map((ch, index) => {
    return <Char character={ch} key={index} clicked={() => {React.deleteCharHandler(index)}}></Char>;
  });

  return (
    <div className="App">
        <ol>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <input type="text" onChange={React.inputChangeHandler} value={React.state.userInput}></input>
        <p>{React.state.userInput}</p>
        <Validation inputLength={React.state.userInput.length}></Validation>
        {charList}
    </div>
  );
}

export default App;

import './App.css';
import Add from './components/Add';
import Display from './components/Display';
import React, { useState } from 'react';

function App() {
  const [ todoList, setList ] = useState([]);

  return (
    <div className="App">
      <h1>To-Do List: </h1>
      <Add todoList={ todoList } setList={ setList }/>
      <Display todoList={ todoList } setList={ setList }/>
    </div>
  );
}

export default App;

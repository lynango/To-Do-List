import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <Todo list = {list} setList = {setList} />
    </div>
  );
};

export default App;
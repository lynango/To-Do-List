import React, { useState } from "react";

const Display = (props) => {
const { todoList, setList } = props;

const handleCompleted = (task) => {
  task.Delete = !task.Delete;
  setList([...todoList]);
  };

const styled = (Delete) => {
  if (Delete === true) {
    return "completed";
  } else {
    return "notCompleted";
  }
};

const deleteButton = (idFromBelow) => {
  setList(
      todoList.filter((task, index) => {
        return task.id !== idFromBelow;
      })
    );
  };
  return (
    <div class="list">
      {todoList.map((task, index) => (
        <ul className={styled(task.Delete)} key={task.id}>
          <li>{task.content}</li> 
          <input type="checkbox" onChange={() => handleCompleted(task)} />
          <button class="button" onClick={() => deleteButton(task.id)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default Display;
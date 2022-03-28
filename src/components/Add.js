import React, { useState } from "react";

const Add = (props) => {
const [todoTask, setTodoTask] = useState("");
const { todoList, setList } = props;

const submitHandler = (e) => {
    e.preventDefault();
    setList([
    ...todoList,
    {
    content: todoTask,
    markedDelete: false,
        id: Math.floor(Math.random() * 100000000).toString(),
    },
    ]);
    setTodoTask("");
};

return (
    <div>
        <form onSubmit={submitHandler}>
            <input
            value={todoTask}
            onChange={(e) => setTodoTask(e.target.value)}
            type="text"/>
            <button class="button">Add</button>
        </form>
    </div>
);
};

export default Add;
import React, {useState} from "react";

const Todo = (props) => {
    const {list, setList} = props;
    const [task, setTask] = useState("");
    
    const taskDuty = {
        description: task,
        complete: false
    };
    const addTask = (e) => {
        e.preventDefault();
        setList([...list, taskDuty]);
        setTask("");
    };
    const markedComplete = (task) => {
        task.complete = !task.complete;
        setList([...list]) ;
    };
    const deleteButton = () => {
        const updatedList = list.filter((task) => task.complete === false);
        setList(updatedList);
    };

// Bootstrap was installed

return(
    <div className="form">
        <form onSubmit = {addTask} >
            <h1>To-Do List: </h1>
            <div class="form-group">
                <input 
                onChange={(e) => {setTask(e.target.value)}}
                value = {task} 
                name = "task" 
                type="text"/>
            </div>
            <button class="mx-2 mt-4 btn btn-primary" value="task" type="submit">Add Task</button>
        </form>
        <div class="col-2">
            {list.map((task, index) => (
                <ul key={index}>
                    <li class="m-3">{task.description}
                        <input  
                        onClick={(e)=> {markedComplete(task);}} 
                        checked={task.complete} 
                        type="checkbox"/>
                        <button class="mx-2 mt-4 btn btn-danger" onClick={(e) => {deleteButton();}}>Delete</button>
                    </li>
                </ul> 
            ))}
        </div> 
    </div>
)};

export default Todo;
import React, {useState} from 'react';
import './style.css';

export default function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    function addTask(){
        if (taskInput.trim() !== ''){

            setTasks(t => [...t, taskInput]);
            setTaskInput('');

        }
        

        
    }

    function deleteTask(index){
        setTasks(t => tasks.filter((_, i) => i != index));
    }

    function moveTaskUp(index){
        if (index > 0){
            setTasks(
                (t) => {
                    const newTasks = [...t];
                    [newTasks[index], newTasks[index-1]] = [newTasks[index-1], newTasks[index]];
                    return newTasks;
                }
            );
        }
    }
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            setTasks(
                (t) => {
                    const newTasks = [...t];
                    [newTasks[index], newTasks[index+1]] = [newTasks[index+1], newTasks[index]];
                    return newTasks;
                }
            );
        }
    }
    




    return(
        <div className="toDoListContainer">
            <h1>To-Do-List</h1>
            <input type='text' value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder='Enter a task...'/>
            <button onClick={addTask} className='addButton'>Add</button>
            <div>
                <ul>
                    {tasks.map((element, index) => 
                            (<li key={index}>
                                <span className='text'>{element}</span> 
                                <button className='deleteButton' onClick={() => deleteTask(index)}>Delete</button> 
                                <button className='moveButton' onClick={() => moveTaskUp(index)}>☝🏻</button>
                                <button className='moveButton' onClick={() => moveTaskDown(index)}>👇🏻</button>
                            </li>))}
                </ul>
            </div>
        </div>
    );
}
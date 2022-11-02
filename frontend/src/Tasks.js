import React, {useEffect, useState} from 'react';
import Task from './task';
import {Link} from "react-router-dom";

function Tasks() {
    const [tasks, setTasks] = useState([]); // This is state hook. Looks similar as state in class component definition.

    useEffect(() => { // This will happen on every component update. Similar to componentDidMount componentDidUpdate and componentWillUnmount combined.
        getTasks().then(r => console.log(r));
    }, []);

    const getTasks = async () => {
        const response = await fetch(`http://localhost:8080/tasks`);
        const data = await response.json();
        setTasks(data);
        console.log(data);
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:8080/tasks/${id}`, {
            method: 'DELETE',
        })
        await getTasks();
    };

    return (
        <>
            <Link to="/tasks/new">Add new</Link>
            <div className="Tasks">
                {tasks.map((task) => {
                    return <Task taskName={task.taskName}
                                 taskId={task.taskId}
                                 taskDeadline={task.taskDeadline}
                                 deleteHandler={deleteTask} />
                })}
            </div>
        </>
    );
}

export default Tasks;


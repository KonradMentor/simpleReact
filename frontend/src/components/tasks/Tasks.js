import React, {useEffect, useState} from 'react';
import Task from '../task/Task';
import TaskService from "../../sercvices/myapi.service";
import {Link} from "react-router-dom";

function Tasks() {
    const [tasks, setTasks] = useState([]); // This is state hook. Looks similar as state in class component definition.

    useEffect(() => { // This will happen on every component update. Similar to componentDidMount componentDidUpdate and componentWillUnmount combined.
        prepareAllTasks()
            .then(() => {
                console.log(tasks)
            });
    }, []);

    const prepareAllTasks = async () => {
        let data = await TaskService.getAllTasks();
        setTasks(data);
        console.log(data);
    }

    const performDelete = async (id) => {
        await TaskService.deleteTask(id);
        await prepareAllTasks();
    }

    return (
        <>
            <Link to="/tasks/new">Add new</Link>
            <div className="Tasks">
                {tasks.map((task) => {
                    return <Task key={task.taskId} //keys help react identify which items have changed
                                 taskName={task.taskName}
                                 taskId={task.taskId}
                                 taskDeadline={task.taskDeadline}
                                 deleteHandler={performDelete} />
                })}
            </div>
        </>
    );
}

export default Tasks;


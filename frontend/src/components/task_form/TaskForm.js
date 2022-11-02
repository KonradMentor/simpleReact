import React, {useState} from 'react';
import {Link} from "react-router-dom";
import TaskService from "../../sercvices/myapi.service";

function TaskForm() {

    const [errors, setErrors] = useState("");

    const [form, setForm] = useState({
        taskName: "",
        taskDeadline: Date.now()
    });
    const {taskName, taskDeadline} = form;

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        TaskService.createTask({taskName, taskDeadline})
            .then(res => res.data)
            .then(res => {
                console.log("Request complete! response:", res);
            }).catch((error) => {
            console.log("registration error", error);
            setErrors("registration error");
        });
        setErrors("registered successfully");
        setForm({
            taskName: "",
            taskDeadline: ""
        });
    }

    return (
        <div className={"wrapper-container"}>
            <div className={"outer-box"}>
                <div className={"inner-box"}>
                    <h1 className={"title"}>Add new task</h1>
                    <h4>{errors}</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="taskName"
                            placeholder="taskName"
                            value={taskName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="datetime-local"
                            name="taskDeadline"
                            placeholder="taskDeadline"
                            value={taskDeadline}
                            onChange={handleChange}
                            required
                        />
                        <button className={"submit-btn"} type="submit">
                            Add
                        </button>
                        <Link to="/">
                            Back to main page
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;
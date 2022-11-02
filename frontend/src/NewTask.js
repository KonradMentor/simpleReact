import React, {useState} from 'react';
import {Link} from "react-router-dom";

function NewTask() {

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
        fetch(`http://localhost:8080/task?taskName=${taskName}&taskDeadline=${taskDeadline}`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
            }
        }).then(res => {
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

export default NewTask;
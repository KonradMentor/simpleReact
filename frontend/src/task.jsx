import React from "react";

function Task(props) {

    return (
        props.taskId && // Task will be shown only if taskId is provided
        <div>
            <h3>{props.taskName}</h3>
            <div className="center">
                <p>id: {props.taskId}</p>
                <p>deadline: {props.taskDeadline}</p>
                <button onClick={() => props.deleteHandler(props.taskId)}>delete</button>
            </div>
        </div>
    )
}

export default Task;
import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

const createTask = async ({taskName, taskDeadline}) => {
    let customConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return axios.post(API_URL + `?taskName=${taskName}&taskDeadline=${taskDeadline}`, customConfig);
}

const deleteTask = async (id) => {
    return axios.delete(API_URL + `/${id}`)
};

const getAllTasks = async () => {
    return axios.get(API_URL).then(r => r.data);
}

const TaskService = {
    createTask,
    deleteTask,
    getAllTasks
}

export default TaskService;
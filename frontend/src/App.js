import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import './App.css';
import TaskForm from "./components/task_form/TaskForm";
import React from "react";

function App() {

  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Tasks/>}>
            </Route>
            <Route exact path="/tasks/new" element={<TaskForm/>}>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;

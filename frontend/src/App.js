import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Tasks from "./Tasks";
import './App.css';
import NewTask from "./NewTask";
import React from "react";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Tasks/>}>
            </Route>
            <Route exact path="/tasks/new" element={<NewTask/>}>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;

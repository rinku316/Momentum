import React, { useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'


export default function App() {
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(task);
  }
  
  return (
    <div>
      <header>
        <h1>Momentum App</h1>
        <p><i>Welcome to Momentum App!</i></p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear All Tasks</button>
    </div>
  )
}

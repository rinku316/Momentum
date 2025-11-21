import React, { useState } from 'react'
export default function Taskform({addTask}) {
  let[task, setTask]   = useState("");
  let[priority, setpriority] = useState("medimum");
  let[category, setCategory] = useState("general");

  const handlesubmit = () => {
    addTask({Text: task, priority, category, completed: false});
  }
  return (
    <div>
      <form className='task-form'onSubmit={handlesubmit}>
        <div id='inp'>
          <input type="text" placeholder='Enter the task' onChange={(even) =>setTask(even.target.value)} />
          <span><button type="submit">Add Task</button></span>
          <h2>{task} {category} {priority}</h2>
        </div>

        <div id='btns'>
          <select onChange={(even) => setCategory(even.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <select onChange={(even) => setpriority(even.target.value)}>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </form>
    </div>
  )
}

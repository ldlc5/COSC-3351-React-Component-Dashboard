import { useState } from "react"
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
        {id: 1,
        text: "Example",
        time: "8:00AM",
        reminder: false},
        {id: 2,
        text: "Example 2",
        time: "1:00PM",
        reminder: false},
        {id: 3,
        text: "Example 3",
        time: "5:00PM",
        reminder: false},
    ])

  const addTask = (task) => {
    console.log('Task added.', task);
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  
  const deleteTask = (id) => {
    console.log("Task deleted. ID: ", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log("Reminder toggled. ID: ", id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ("All tasks completed!")}
    </div>
  );
}

export default App;
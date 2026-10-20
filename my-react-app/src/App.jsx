import { useState } from "react"
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [defaultPage, changeDefaultPage] = useState (true)

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
        {id: 1,
        text: "Make breakfast",
        time: "8:00AM",
        reminder: false},
        {id: 2,
        text: "Walk the dog",
        time: "10:00AM",
        reminder: true},
        {id: 3,
        text: "Order lunch",
        time: "1:00PM",
        reminder: true},
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
      {defaultPage ? (
        <><Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ("All tasks completed!")}</>
        ) : ( <About /> )}
      <Footer onClick={() => changeDefaultPage(!defaultPage)} changeDefault={defaultPage} />
    </div>
  );
}

export default App;
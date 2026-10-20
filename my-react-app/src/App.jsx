import { useState } from "react"
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  // Changes whether the layout will show the default page, or about page.
  const [defaultPage, changeDefaultPage] = useState (true)

  // Changes whether the "add task" field will display or not.
  const [showAddTask, setShowAddTask] = useState (false)

  // Array that holds tasks, with default tasks added to the page.
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

  // Function to add a task to the array.
  const addTask = (task) => {
    console.log('Task added.', task);
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  
  // Function to delete a task from the array.
  const deleteTask = (id) => {
    console.log("Task deleted. ID: ", id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Function to toggle the reminder display on a task.
  const toggleReminder = (id) => {
    console.log("Reminder toggled. ID: ", id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // If defaultPage is true, show To-Do List page. If false, show About page.
  // Shows footer on both pages.
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
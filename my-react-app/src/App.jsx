import { useState } from "react"
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
        {id: 1,
        text: 'Example',
        reminder: false},
        {id: 2,
        text: 'Example 2',
        reminder: false},
        {id: 3,
        text: 'Example 3',
        reminder: false},
    ])

  const deleteTask = (id) => {
    console.log('Task deleted. ID: ', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log('Reminder toggled. ID: ', id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ("All tasks completed!")}
    </div>
  );
}

export default App;
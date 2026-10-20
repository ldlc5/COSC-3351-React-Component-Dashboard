import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("")
  const [time, setTime] = useState("")
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    // Prevents page refresh.
    e.preventDefault()

    if(!text){
      alert("Add a task.")
      return
    }
    onAdd({text, time, reminder})
    setText("")
    setTime("")
    setReminder(false)
  }

  return (
    <form onSubmit={onSubmit}>
        <div className="control">
            <label>Add task</label>
            <input type="text" placeholder="Enter task here..." value={text} 
            onChange={(e) => setText(e.target.value)} />
            <label>Set day and time</label>
            <input type="text" placeholder="Enter time here..." value={time} 
            onChange={(e) => setTime(e.target.value)} />
            <label>Set reminder?</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            <input type="submit" value="Save Task" className="btn"/>
        </div>
    </form>
  )
}

export default AddTask
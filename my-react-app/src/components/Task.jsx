import Button from "./Button";

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text}</h3>
        <h4>{task.time}</h4>
        <Button text="Remove" onClick={() => onDelete(task.id)}/>
    </div>
  )
}

export default Task
import Button from "./Button";

// Button changes text depending on whether the Add Task field is visible.
const Header = ({title = "To-Do List", onAdd, showAdd}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={onAdd} text={showAdd ? "Hide" : "Add"} />
    </header>
  );
}

export default Header;
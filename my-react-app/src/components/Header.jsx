import Button from "./Button";

const Header = ({title = "To-Do List"}) => {
    const onClick = () => {
      console.log('Button clicked.')
  }
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={onClick} />
    </header>
  );
}

export default Header;
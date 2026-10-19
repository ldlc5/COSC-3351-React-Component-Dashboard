const Button = ({text="Add", onClick}) => {
  return (
    <button onClick={onClick} className="btn">{text}</button>
  )
}

export default Button;
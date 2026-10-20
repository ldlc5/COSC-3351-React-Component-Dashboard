import Button from "./Button"

const Footer = ({onClick, changeDefault}) => {
  return (
    <footer>
        <p>© 2026 Lizette De La Cruz. All rights reserved.</p>
        <Button onClick={onClick} text={changeDefault ? "About" : "Go Back"} />
    </footer>
    
  )
}

export default Footer
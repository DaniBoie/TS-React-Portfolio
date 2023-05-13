import "./Greet.css"
import { Link } from "react-router-dom";

type GreetProps = {
  name : string
}

export const Greet = (props: GreetProps) => {
  return (
    <header className="header">
      <p className="nameLogo">
        <Link className="link"to="/">{props.name}</Link>
      </p>
      <nav className="links">
        <p>
          <Link to="/projects" className="link">Projects</Link>
          
          
        </p>
        <p className="link">Resume</p>
        <p className="link">Contact</p>
      </nav>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Benne&family=Yrsa&display=swap');
      </style>
    </header>
    
  )
}
import "./Greet.css"
import { Link } from "react-router-dom";

type GreetProps = {
  name : string
}

export const Greet = (props: GreetProps) => {
  return (
    <header className="header">
      <p className="nameLogo">
        {props.name}
      </p>
      <nav className="links">
        <p className="link">
          <Link to="/">Projects</Link>
          
          
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
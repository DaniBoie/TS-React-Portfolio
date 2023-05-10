import "./Greet.css"

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
        <p>Projects</p>
        <p>Resume</p>
        <p>Contact</p>
      </nav>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Benne&display=swap');
      </style>
    </header>
    
  )
}
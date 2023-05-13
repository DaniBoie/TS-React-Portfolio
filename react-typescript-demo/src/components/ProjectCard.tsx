import { Link } from "react-router-dom"
import "./ProjectCard.css"

export const ProjectCard = () => {
  return (
    <Link to='/projects'>
      <div className="card">
        <p className="innerCard"></p>
      </div>
    </Link>
    
  )
}
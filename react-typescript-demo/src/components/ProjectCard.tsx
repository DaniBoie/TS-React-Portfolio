import { Link } from "react-router-dom"
import "./ProjectCard.css"
import { url } from "inspector"

export const ProjectCard = (props: any) => {
  return (
    <Link to='/projects'>
      <div className="card" style={{backgroundImage: props.url}}>
      </div>
    </Link>
    
  )
}
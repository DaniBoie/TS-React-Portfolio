import "./Projects.css"
import {ProjectCard} from "./ProjectCard"

export const Projects = () => {
  return (
    <>
      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
      </div>
      <div className="projectCards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      
    </>
  )
}
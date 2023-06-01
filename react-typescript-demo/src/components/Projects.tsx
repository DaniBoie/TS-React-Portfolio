import "./Projects.css"
import {ProjectCard} from "./ProjectCard"

export const Projects = () => {
  return (
    <>
      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
      </div>

      <div className="projectCards">
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      
    </>
  )
}
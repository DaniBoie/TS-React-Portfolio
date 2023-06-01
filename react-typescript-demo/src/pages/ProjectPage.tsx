import { Greet } from "../components/Greet"
import { ProjectCard } from "../components/ProjectCard"

export const ProjectPage = () => {
  return (
    <>
      <Greet name="Daniel Ayala" />


      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
        <p className="projectTag">User Research</p>
        <p className="projectTag">UI/UX</p>
      </div>

      <div className="projectBody">

        <div className="projectSection">
          <div></div>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <p>Secret Sauce began as a class exercise for Human Computer Interaction, where we were instructed to solve a novel problem in the world.  Our team first brainstormed problem statements individually, then came together on a final decision based on weighted analysis. </p>
          <div></div>
        </div>
        
        <div className="projectSection">
          <div></div>
          <p>After everyone on the team was onboard with the problem statement we conducted a competitive analysis to understand what applications are already on the market. We then had another brainstorming session to ideate the main features of the application that we believed would satisfy the problem statement while making our application stand out.</p>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <div></div>
          
        </div>

      </div>
    </>
  )
}
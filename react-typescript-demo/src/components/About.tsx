import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="info">
        <p className="jobTitle">Software Engineer and Designer</p>
        <div className="education"> 
          <div>
            <p className="topText">B.S. Software Engineering</p>
            <p className="bottomText">University of California, Irvine</p>
          </div>
          <div>
            <p className="topText">Full Stack Web Development Certificate </p>
            <p className="bottomText">UCI Division of Continuing Education</p>
          </div>
        </div>
      </div>



      <div className="portfolioImage">
        {/* <img src={require('../resources/portfolio.JPG')} alt="Daniel Ayala's Face"/> */}
      </div>


      <div className="slogan">
        <p>
          Creating innovating, user-focused software solutions to real problems
        </p>
      </div>
    </div>
  )
}
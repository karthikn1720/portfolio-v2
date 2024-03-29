import ProjectCard from "design/ProjectCard/ProjectCard";

import img1 from "assets/project-1.png";

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
        <ProjectCard img={img1} name="_process-manager">
          This is a simple cross platform desktop app built with electronjs.
          This app lets you save your frequently used commands and run it when
          needed
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;

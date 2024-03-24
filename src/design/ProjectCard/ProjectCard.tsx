import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Button from "design/Button/Button";
import Card from "design/Card/Card";
import Text from "design/Text/Text";
import React, { ReactNode } from "react";

interface ProjectCardProps {
  children: ReactNode;
  img?: any;
  name: string;
}

const ProjectCard = ({ children, img, name }: ProjectCardProps) => {
  console.log(name);
  return (
    <div className="project-card">
      <CodeHighlight>{`// ${name}`}</CodeHighlight>
      <div className="project-card-container">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="text-container">
          <Text className="project-card-text">{children}</Text>
          <div className="footer">
            <Button>view-project</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

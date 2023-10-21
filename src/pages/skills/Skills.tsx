import React from "react";
import { ReactComponent as ReactLogo } from "assets/react-logo.svg";
import { ReactComponent as PostgresLogo } from "assets/postgres.svg";
import { ReactComponent as NodejsLogo } from "assets/nodejs.svg";
import { ReactComponent as NestjsLogo } from "assets/nestjs.svg";
import { ReactComponent as AngularLogo } from "assets/angular.svg";
import { ReactComponent as MongodbLogo } from "assets/mongodb.svg";
import { ReactComponent as AwsLogo } from "assets/aws.svg";
import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import {
  angularCode,
  awsCode,
  mongodbCode,
  nestjsCode,
  nodejsCode,
  reactCode,
  sqlCode,
} from "./data";
import Text from "design/Text/Text";
import useTypewriter from "hooks/useTypewriter";
import Skill from "./SkillWrapper";
import { SvgIcon } from "@mui/material";

const Skills = () => {
  console.log("hello");
  return (
    <div className="skills-container flex flex-d-c g20px pad-20px">
      <Skill
        name="React"
        logo={<ReactLogo />}
        code={reactCode}
        language="jsx"
      />
      <Skill
        name="Angular"
        logo={<AngularLogo />}
        code={angularCode}
        language="javascript"
      />
      <Skill
        name="Node JS"
        logo={<NodejsLogo />}
        code={nodejsCode}
        language="javascript"
      />
      <Skill
        name="Nest JS"
        logo={<NestjsLogo />}
        code={nestjsCode}
        language="javascript"
      />
      <Skill
        name="Postgres SQL"
        logo={<PostgresLogo />}
        code={sqlCode}
        language="sql"
      />
      <Skill
        name="Mongo DB"
        logo={<MongodbLogo />}
        code={mongodbCode}
        language="json"
      />
      <Skill name="AWS" logo={<AwsLogo />} code={awsCode} language="bash" />
    </div>
  );
};

export default Skills;

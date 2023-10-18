import React from "react";
import { SvgIcon } from "@mui/material";

import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import { skills } from "./data";
import Text from "design/Text/Text";
// import useTypewriter from "hooks/useTypewriter";

const Skills = () => {
  // const typeWriter = useTypewriter(skills.react.code, {
  //   speed: 100,
  // });
  return (
    <div className="skills-container pad-20px">
      <div className="skill-1 flex aic g20px">
        <div className="skill-wrap flex flex-d-c aic">
          <div className="skill-logo">
            <skills.react.logo />
          </div>
          <Text>{skills.react.skill}</Text>
        </div>
        <div className="skill-text bg-black code-wrap">
          <CodeHighlight fontSize="10px" language="jsx">
            {/* {typeWriter} */}
          </CodeHighlight>
        </div>
      </div>
    </div>
  );
};

export default Skills;

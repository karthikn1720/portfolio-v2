import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Text from "design/Text/Text";
import useTypewriter from "hooks/useTypewriter";
import React from "react";

interface SkillWrapper {
  logo: JSX.Element;
  code: string;
  name: string;
  language: string;
}
const Skill = ({ logo, code, name, language }: SkillWrapper) => {
  const typeWriter = useTypewriter(code, {
    speed: 10,
  });
  return (
    <div className="skill-1 flex-d-c-mobile flex aic g20px jcsb pad-lr-70">
      <div className="skill-wrap flex aic flex-d-c g10px">
        <div className="skill-logo">{logo}</div>
        <Text>{name}</Text>
      </div>
      <div className="skill-text bg-black h100px w500px hide-mobile code-wrap scroll-bar">
        <CodeHighlight fontSize="10px" language={language}>
          {typeWriter}
        </CodeHighlight>
      </div>
    </div>
  );
};

export default Skill;

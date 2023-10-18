import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Text from "design/Text/Text";
import React from "react";

const code = `import React from "react";
import Text from "design/Text/Text";

const Experience = () => {
  return (
    <div className="flex h100">
      <div className="bg-white p-20px flex flex-d-c g20px">
        <Text variant="h4" color="black">
          Work Experience
        </Text>
        <div className="experience-1">
          <Text variant="body1">Jan 2023 - Present</Text>
          <Text color="#DE1D3E" variant="body1">
            Software Engineer
          </Text>
          <Text color="#333333" variant="body1">
            Byteforza Technologies
          </Text>
        </div>
        <div className="experience-2">
          <Text variant="body1">Nov 2020 - Dec 2022</Text>
          <Text color="#DE1D3E" variant="body1">
            WIMS
          </Text>
          <Text color="#333333" variant="body1">
            Wipro Limited
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Experience;`;

const Experience = () => {
  return (
    <div className="flex h100">
      <div className="flex-1 overflow-s">
        <CodeHighlight showNumbers language="jsx">
          {code}
        </CodeHighlight>
      </div>
      <div className="bg-white p-20px flex-1 flex flex-d-c g20px">
        <Text variant="h4" color="black">
          Work Experience
        </Text>
        <div className="experience-1">
          <Text variant="body1">Jan 2023 - Present</Text>
          <Text color="#DE1D3E" variant="body1">
            Software Engineer
          </Text>
          <Text color="#333333" variant="body1">
            Byteforza Technologies
          </Text>
        </div>
        <div className="experience-2">
          <Text variant="body1">Nov 2020 - Dec 2022</Text>
          <Text color="#DE1D3E" variant="body1">
            WIMS
          </Text>
          <Text color="#333333" variant="body1">
            Wipro Limited
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import Text from "design/Text/Text";
import React from "react";

const code = `import React from "react";
import Text from "design/Text/Text";

const Education = () => {
  return (
    <div className="flex h100">
      <div className="bg-white p-20px flex flex-d-c g20px">
        <Text variant="h4" color="black">
          Education
        </Text>
        <div className="education-1">
          <Text variant="body1">2017 - 2020</Text>
          <Text color="#DE1D3E" variant="body1">
            Bachelors in Computer Science
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Arts and Science College
          </Text>
        </div>
        <div className="education-2">
          <Text variant="body1">2016 - 2017</Text>
          <Text color="#DE1D3E" variant="body1">
            Higher Secondary School
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Martric Hr Sec School
          </Text>
        </div>
        <div className="education-3">
          <Text variant="body1">2014 - 2015</Text>
          <Text color="#DE1D3E" variant="body1">
            SSLC
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Martric Hr Sec School
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Education;`;

const Education = () => {
  return (
    <div className="flex flex-d-c-mobile-rev h100">
      <div className="flex-1 overflow-s scroll-bar">
        <CodeHighlight showNumbers language="jsx">
          {code}
        </CodeHighlight>
      </div>
      <div className="bg-white p-20px flex-1 flex flex-d-c g20px">
        <Text variant="h4" color="black">
          Education
        </Text>
        <div className="education-1">
          <Text variant="body1">2017 - 2020</Text>
          <Text color="#DE1D3E" variant="body1">
            Bachelors in Computer Science
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Arts and Science College
          </Text>
        </div>
        <div className="education-2">
          <Text variant="body1">2016 - 2017</Text>
          <Text color="#DE1D3E" variant="body1">
            Higher Secondary School
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Martric Hr Sec School
          </Text>
        </div>
        <div className="education-3">
          <Text variant="body1">2014 - 2015</Text>
          <Text color="#DE1D3E" variant="body1">
            SSLC
          </Text>
          <Text color="#333333" variant="body1">
            Nandha Martric Hr Sec School
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Education;

///

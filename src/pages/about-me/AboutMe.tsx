import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import React from "react";

const AboutMe = () => {
  return (
    <CodeHighlight showNumbers>
      {`/**
 * Experienced Full Stack Developer with
 * hands-on expertise in web development. 
 * Proficient in React and Node.js. 
 * I am dedicated to delivering high-quality,
 * efficient, and scalable solutions. 
 * I thrive on solving complex challenges and exceeding client expectations.
 */
const sayHello = "hello";
console.log(sayHello);`}
    </CodeHighlight>
  );
};

export default AboutMe;

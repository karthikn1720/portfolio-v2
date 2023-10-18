import CodeHighlight from "components/CodeHighlight/CodeHighlight";
import React from "react";

const AboutMe = () => {
  return (
    <CodeHighlight showNumbers>
      {`/**
 * About me
 * I have 2 years of еxperience in web
 * development lorem ipsum dolor sit amet,
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim
 */
const sayHello = "hello";
console.log(sayHello);`}
    </CodeHighlight>
  );
};

export default AboutMe;

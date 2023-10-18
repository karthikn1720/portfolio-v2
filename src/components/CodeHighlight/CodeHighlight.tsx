import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./code-highlight.scss";
interface CodeHighlightProps {
  children: any;
  showNumbers?: boolean;
  fontSize?: string;
  language?: string;
}
const CodeHighlight = ({
  children,
  showNumbers = false,
  fontSize,
  language = "javascript",
}: CodeHighlightProps) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        border: "none",
        background: "none",
        boxShadow: "none",
        textShadow: "none",
        fontSize: fontSize,
        color: "white",
      }}
      lineNumberContainerStyle={{ padding: "0" }}
      useInlineStyles
      showLineNumbers={showNumbers}
      language={language}
      style={dark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;

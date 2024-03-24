import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
        wordWrap: "break-word",
        textOverflow: "ellipsis",
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
      style={oneDark}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeHighlight;

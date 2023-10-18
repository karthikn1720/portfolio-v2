import { useState, useEffect } from "react";

const useTypewriter = (text: string, { speed = 50, infinite = false }) => {
  const [displayText, setDisplayText] = useState("");

  // useEffect(() => {
  let i = 0;
  let isCompleted = false;
  let wait = 0;
  const typingInterval = setInterval(() => {
    i = i + 1;
    console.log(i);
    if (i > text.length) {
      isCompleted = true;
    }
    if (i === 0 && infinite) {
      isCompleted = false;
    }
    if (!isCompleted) {
      wait = 0;
      setDisplayText((prevText) => {
        return `${prevText}${text.charAt(i - 1)}`;
      });
    }
    // if (wait < 300) {
    //   wait++;
    //   return;
    // }
    if (isCompleted) {
      // ADD THIS CHECK
      i = i - 2;
      setDisplayText((prevText) => {
        return prevText.slice(0, -1);
      });
    }
    if (!infinite && isCompleted) {
      clearInterval(typingInterval);
    }
  }, speed);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // }, [text, speed]);

  return displayText;
};

export default useTypewriter;

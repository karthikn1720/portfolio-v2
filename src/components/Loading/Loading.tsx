import React from "react";
import "./loading.scss";
const Loading = () => {
  const [state, setState] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setTimeout(() => {
      setState("trigger-animation");
    }, 1);
  }, []);

  return <div className={`${state} loading-container`}>Loading...</div>;
};

export default Loading;

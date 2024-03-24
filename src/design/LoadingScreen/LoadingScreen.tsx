import { CircularProgress } from "@mui/material";
import Text from "design/Text/Text";
import React, { ReactNode } from "react";

interface LoadingScreenProps {
  children: ReactNode;
}

const LoadingScreen = ({ children }: LoadingScreenProps) => {
  return (
    <div className="loading-container">
      <div className="loading-dialog">
        <Text>{children}</Text>
        {/* <CircularProgress /> */}
      </div>
    </div>
  );
};

export default LoadingScreen;

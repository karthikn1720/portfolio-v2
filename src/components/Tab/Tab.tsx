import Text from "design/Text/Text";
import { useTabContext } from "hooks/useTab";
import React from "react";

const Tab = () => {
  const { tabsList, activeTabs, handleCloseFile, handleChangeTab } =
    useTabContext();

  return (
    <div className="tab-container outline h35px flex">
      {activeTabs.map((tab, i) => {
        return (
          <div
            key={i}
            className="curson-p tab h100 g20px flex b-right pad-lr-20 center"
          >
            <Text onClick={() => handleChangeTab(tab)}>{tab.label}</Text>
            <button
              onClick={() => handleCloseFile(tab)}
              className="curson-p color-inactive bg-primary fs-m"
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tab;

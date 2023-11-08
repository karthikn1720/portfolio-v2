import Text from "design/Text/Text";
import { useTabContext } from "hooks/useTab";

const Tab = () => {
  const { activeTabs, ActivePage, handleCloseFile, handleChangeTab } =
    useTabContext();

  return (
    <div className="tab-container border-right h35px flex overflow-s no-wrap">
      {activeTabs.map((tab, i) => {
        return (
          <div
            key={i}
            className={`curson-p ${
              tab.label === ActivePage?.label ? "active-tab-button" : ""
            }  tab w-max h100 g20px flex b-right pad-lr-20 center`}
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

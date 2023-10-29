import { ReactComponent as ProfessionalInfoIcon } from "assets/professional-info-icon.svg";
import { ReactComponent as PersonalInfoIcon } from "assets/personal-info-icon.svg";
import { ReactComponent as HobbiesIcon } from "assets/hobbies-icon.svg";
import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { ReactComponent as ArrowSmallIcon } from "assets/arrow2.svg";
import { ReactComponent as File } from "assets/File.svg";
import Text from "design/Text/Text";
import { useTabContext } from "hooks/useTab";
import React from "react";

const Sidebar = () => {
  const { tabsList, handleTabClick, handleFileClick } = useTabContext();
  const [showSidebar, setShowSidebar] = React.useState(false);
  const handleClick = (item: any, i: number) => {
    handleTabClick(item, i);
  };

  const handleSidebarShow = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="sidebar-container h100v-100 flex">
      <div className="sidebar-small-wrapper w50px jcsb g20px aic pad-t-20px flex-d-c flex h100">
        <div className="sidebar-small-icon-wrapper hide-mobile flex flex-d-c">
          <ProfessionalInfoIcon className="curson-p sidebar-icon color-active" />
          <PersonalInfoIcon className="curson-p sidebar-icon color-active" />
          <HobbiesIcon className="curson-p sidebar-icon color-active" />
        </div>
        <div
          className={`sidebar-close-button show-mobile flex aic jcc ${
            !showSidebar ? "rotate-270" : "rotate-90"
          }`}
        >
          <ArrowIcon
            onClick={handleSidebarShow}
            className="sidebar-icon-main"
          />
        </div>
      </div>
      <div
        className={`sidebar-main-wrapper ${
          !showSidebar ? "hide-mobile" : ""
        } outline w100`}
      >
        <div className="h35px w100 flex g10px aic pad-lr-10 outline">
          <ArrowIcon />
          <Text className="curson-p" type="active">
            Personal Info
          </Text>
        </div>
        <div className="h100-35px pad-l-10">
          {tabsList.map((item, index) => {
            return (
              <div className="" key={index}>
                <div
                  className="flex curson-p aic g10px"
                  onClick={() => handleClick(item, index)}
                >
                  <ArrowSmallIcon
                    className={item.isFolderOpen ? "rotate-90" : undefined}
                  />
                  {item.icon}
                  <Text className="curson-p" type="active">
                    {item.label}
                  </Text>
                </div>
                {item.subItem && item.isFolderOpen && (
                  <div className=" pad-l-20 aic">
                    {item.subItem.map((subItem, subIndex) => {
                      return (
                        <div
                          onClick={() => {
                            setShowSidebar(false);
                            handleFileClick(subItem, index, subIndex);
                          }}
                          className="flex aic g10px curson-p"
                          key={`${index}-${subIndex}`}
                        >
                          <File />
                          <Text className="curson-p" type="active">
                            {subItem.label}
                          </Text>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

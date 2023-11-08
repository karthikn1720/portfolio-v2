import { ReactComponent as ProfessionalInfoIcon } from "assets/professional-info-icon.svg";
import { ReactComponent as PersonalInfoIcon } from "assets/personal-info-icon.svg";
import { ReactComponent as HobbiesIcon } from "assets/hobbies-icon.svg";
import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { ReactComponent as ArrowSmallIcon } from "assets/arrow2.svg";
import { ReactComponent as File } from "assets/File.svg";
import Text from "design/Text/Text";
import { useTabContext } from "hooks/useTab";
import React from "react";

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<any>;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  const { tabsList, handleTabClick, handleFileClick } = useTabContext();
  const handleClick = (item: any, i: number, i2: number) => {
    handleTabClick(item, i, i2);
  };

  console.log(tabsList);

  const handleBlogClick = (sItem: any, index: number, index2: number) => {
    handleFileClick(sItem, index, index2);
  };

  return (
    <div className="sidebar-container h100v-100 flex">
      <div className="sidebar-small-wrapper hide-mobile w50px jcsb g20px aic pad-t-20px flex-d-c flex h100">
        <div className="sidebar-small-icon-wrapper flex flex-d-c">
          <ProfessionalInfoIcon className="curson-p sidebar-icon color-active" />
          <PersonalInfoIcon className="curson-p sidebar-icon color-active" />
          <HobbiesIcon className="curson-p sidebar-icon color-active" />
        </div>
      </div>
      <div className={`sidebar-main-wrapper ${!showSidebar ? "hide" : ""}`}>
        {tabsList.map((item, index) => {
          return (
            <div className="">
              <div className="h35px w100 flex g10px aic pad-lr-10 b-bottom b-top">
                <ArrowIcon />
                <Text className="curson-p" type="active">
                  {item.label}
                </Text>
              </div>
              <div className="h100-35px pad-l-10">
                {item?.item?.map((sItem, index2) => {
                  console.log(sItem.isFile);
                  return (
                    <div className="" key={index2}>
                      <div
                        className="flex curson-p aic g10px"
                        onClick={() =>
                          sItem.isFile
                            ? handleBlogClick(sItem, index, index2)
                            : handleClick(sItem, index, index2)
                        }
                      >
                        {!sItem.isFile ? (
                          <ArrowSmallIcon
                            className={
                              sItem.isFolderOpen ? "rotate-90" : undefined
                            }
                          />
                        ) : (
                          <File />
                        )}

                        {sItem.icon}
                        <Text className="curson-p" type="active">
                          {sItem.label}
                        </Text>
                      </div>
                      {sItem.subItem && sItem.isFolderOpen && (
                        <div className=" pad-l-20 aic">
                          {sItem.subItem.map((subItem, subIndex) => {
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
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

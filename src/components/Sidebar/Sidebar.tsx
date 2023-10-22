import { ReactComponent as ProfessionalInfoIcon } from "assets/professional-info-icon.svg";
import { ReactComponent as PersonalInfoIcon } from "assets/personal-info-icon.svg";
import { ReactComponent as HobbiesIcon } from "assets/hobbies-icon.svg";
import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import { ReactComponent as ArrowSmallIcon } from "assets/arrow2.svg";
import { ReactComponent as File } from "assets/File.svg";
import Text from "design/Text/Text";
import { useTabContext } from "hooks/useTab";

const Sidebar = () => {
  const { tabsList, handleTabClick, handleFileClick } = useTabContext();

  const handleClick = (item: any, i: number) => {
    console.log("clicked");
    handleTabClick(item, i);
  };

  return (
    <div className="h100v-100 flex p-fixed w250px outline">
      <div className="w50px g20px aic pad-t-20px flex-d-c flex h100 outline">
        <ProfessionalInfoIcon className="curson-p sidebar-icon color-active" />
        <PersonalInfoIcon className="curson-p sidebar-icon color-active" />
        <HobbiesIcon className="curson-p sidebar-icon color-active" />
      </div>
      <div className=" outline w100">
        <div className="h35px w100 flex g10px aic pad-lr-10 outline">
          <ArrowIcon />
          <Text className="curson-p" type="active">
            Personal Info
          </Text>
        </div>
        <div className="h100 pad-l-10">
          {tabsList.map((item, index) => {
            return (
              <div className="" key={index}>
                <div
                  className="flex aic g10px"
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
                          onClick={() =>
                            handleFileClick(subItem, index, subIndex)
                          }
                          className="flex aic g10px"
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

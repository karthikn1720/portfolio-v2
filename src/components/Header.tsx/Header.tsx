import React from "react";
import "./header.scss";
import Text from "design/Text/Text";
import { ReactComponent as MenuIcon } from "assets/menu.svg";
import { useTabContext } from "hooks/useTab";

interface HeaderProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<any>;
}
const Header = ({ setShowSidebar }: HeaderProps) => {
  const { setActivePage } = useTabContext();

  const contactMe = {
    id: 1,
    label: "contact-me",
    isFile: true,
  };

  const setHelloAsActive = () => {
    setActivePage(null);
  };

  const handleSidebar = () => {
    setShowSidebar((prev: boolean) => !prev);
  };
  const { handleFileClick } = useTabContext();
  return (
    <div className="header-container border">
      <div className="left h100 flex">
        <div
          className="menu-icon-wrapper curson-p h100 center flex b-right"
          onClick={handleSidebar}
        >
          <MenuIcon className="menu-icon" />
        </div>
        <div
          className="flex center h100 w200px pad-lf-20 b-right curson-p"
          onClick={setHelloAsActive}
        >
          <Text color="inactive">Karthik</Text>
        </div>
        <div className="tabs "></div>
      </div>
      <div className="right h100">
        <div
          className="f center float-right h100 pad-lf-20 b-left curson-p"
          onClick={() => handleFileClick(contactMe)}
        >
          <Text color="inactive">_contact-me</Text>
        </div>
      </div>
    </div>
  );
};

export default Header;

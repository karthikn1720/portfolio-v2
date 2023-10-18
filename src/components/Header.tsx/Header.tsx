import React from "react";
import "./header.scss";
import Text from "design/Text/Text";
const Header = () => {
  return (
    <div className="header-container">
      <div className="left h100">
        <div className="flex center h100 w250px pad-lf-20 b-right">
          <Text color="inactive">Karthik</Text>
        </div>
        <div className="tabs"></div>
      </div>
      <div className="right h100">
        <div className="f center h100 pad-lf-20 b-left">
          <Text className="curson-p" color="inactive">
            _contact-me
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Header;

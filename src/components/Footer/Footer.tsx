import React from "react";
import "./footer.scss";
import Text from "design/Text/Text";
const Footer = () => {
  return (
    <div className="footer-container border jcsb w100 flex">
      <div className="flex center h100">
        <div className="flex outline h100 center pad-lf-20">
          <Text color="inactive">Find me in: </Text>
        </div>
        <div className="flex outline h100 center pad-lf-20">
          <Text color="inactive">
            <a href="https://in.linkedin.com/in/karthik-nagaraja-432a57208">
              LinkedIn
            </a>
          </Text>
        </div>
      </div>
      <div className="outline pad-lf-20 center h100 flex">
        <Text color="inactive">
          <a href="https://github.com/karthikn1720">@karthikn1720</a>
        </Text>
      </div>
    </div>
  );
};

export default Footer;

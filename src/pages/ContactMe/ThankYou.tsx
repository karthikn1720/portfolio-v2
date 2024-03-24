import Button from "design/Button/Button";
import Text from "design/Text/Text";
import React from "react";

interface ThankYouProp {
  onClick: () => void;
}

const ThankYou = ({ onClick }: ThankYouProp) => {
  return (
    <div className="thank-you-container">
      <div className="wrapper">
        <Text variant="h4" color="white">
          Thank You! 🤘
        </Text>
        <Text>
          Your message has been accepted. You will receive answer very soon!
        </Text>
        <Button onClick={onClick}>send-new-message</Button>
      </div>
    </div>
  );
};

export default ThankYou;

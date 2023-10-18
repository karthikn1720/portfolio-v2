import { Color, Typography, TypographyProps } from "@mui/material";
import React from "react";
import "./text.scss";
import { Variant } from "@mui/material/styles/createTypography";
// export type TextProps = TypographyProps;
/**
 * This is a simple wrapper component for the Mui Typography component. It just
 * has a few chosen defaults.
 * @param {TextProps}
 * @returns {JSX.Element}
 */
interface TextProps extends TypographyProps {
  type?: "active" | "inactive";
}
const Text = ({
  children,
  className,
  type,
  color,
  variant,
  ...props
}: TextProps): JSX.Element => {
  const colorScheme = {
    active: "#ffffff",
    inactive: "#607b96",
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Typography
      classes={{
        root: "root",
      }}
      color={type ? colorScheme[type] : color}
      variant={variant}
      className={className}
      fontFamily="fira-code"
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;

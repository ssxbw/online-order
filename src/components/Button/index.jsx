import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder16: "rounded-[16px]",
  RoundedBorder8: "rounded-lg",
  CustomBorderLR2: "rounded-br-sm rounded-tr-sm",
};
const variants = {
  icbFillDeeporange700: "bg-deep_orange_700",
  icbFillWhiteA700: "bg-white_A700",
  FillDeeporange700: "bg-deep_orange_700 text-white_A700",
  FillBlue800: "bg-blue_800 text-white_A700",
  OutlineBlue500: "bg-blue_500 border border-blue_500 border-solid shadow-bs",
};
const sizes = { smIcn: "p-1.5", sm: "p-[9px]", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder16",
    "RoundedBorder8",
    "CustomBorderLR2",
  ]),
  variant: PropTypes.oneOf([
    "icbFillDeeporange700",
    "icbFillWhiteA700",
    "FillDeeporange700",
    "FillBlue800",
    "OutlineBlue500",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
